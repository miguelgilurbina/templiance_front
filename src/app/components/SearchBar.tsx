"use client";

import { useState, useEffect, useRef, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDebounce } from "use-debounce";
import { Search, X, ChevronDown, ChevronUp, Clock, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface Filter {
  certificationType: string[];
  industry: string[];
  priceRange: [number, number];
  sortBy: "relevance" | "price_low_to_high" | "price_high_to_low" | "newest";
}

interface Suggestion {
  id: string;
  text: string;
  type: "recent" | "popular" | "template";
}

interface AdvancedSearchBarProps {
  onSearch: (query: string, filters: Filter) => void;
  onFilterChange: (filters: Filter) => void;
  initialFilters: Filter;
  suggestions: Suggestion[];
  loading: boolean;
}

const filterPresets: Array<{
  name: string;
  filters: Partial<Filter>;
}> = [
  {
    name: "Most Popular ISO",
    filters: {
      certificationType: ["ISO"],
      sortBy: "relevance",
      industry: [],
      priceRange: [0, 1000],
    },
  },
  {
    name: "Newest NIST",
    filters: {
      certificationType: ["NIST"],
      sortBy: "newest",
      industry: [],
      priceRange: [0, 1000],
    },
  },
  {
    name: "Affordable Compliance",
    filters: {
      certificationType: [],
      industry: [],
      priceRange: [0, 100],
      sortBy: "price_low_to_high",
    },
  },
];

export default function AdvancedSearchBar({
  onSearch,
  onFilterChange,
  initialFilters,
  suggestions,
  loading,
}: AdvancedSearchBarProps) {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 300);
  const [filters, setFilters] = useState<Filter>(initialFilters);
  const [showFilters, setShowFilters] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onSearch(debouncedQuery, filters);
  }, [debouncedQuery, filters, onSearch]);

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setShowSuggestions(true);
    setSelectedSuggestionIndex(-1);
  };

  const handleFilterChange = (key: keyof Filter, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedSuggestionIndex((prev) =>
        Math.min(prev + 1, suggestions.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedSuggestionIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter") {
      if (selectedSuggestionIndex >= 0) {
        const selected = suggestions[selectedSuggestionIndex];
        setQuery(selected.text);
        setShowSuggestions(false);
        addToRecentSearches(selected.text);
      } else {
        handleSearch();
      }
    }
  };

  const handleSearch = () => {
    onSearch(query, filters);
    setShowSuggestions(false);
    addToRecentSearches(query);
  };

  const addToRecentSearches = (search: string) => {
    setRecentSearches((prev) =>
      [search, ...prev.filter((s) => s !== search)].slice(0, 5)
    );
  };

  const clearFilters = () => {
    setFilters(initialFilters);
  };

  const applyPreset = (preset: (typeof filterPresets)[0]) => {
    setFilters((prev) => {
      const newFilters: Filter = {
        certificationType:
          preset.filters.certificationType ?? prev.certificationType,
        industry: preset.filters.industry ?? prev.industry,
        priceRange: preset.filters.priceRange ?? prev.priceRange,
        sortBy: preset.filters.sortBy ?? prev.sortBy,
      };
      return newFilters;
    });
  };
  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <div className="relative">
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search certification templates..."
          value={query}
          onChange={handleQueryChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          className="pr-10 bg-background border-border text-foreground"
        />
        <Button
          size="sm"
          variant="default"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={handleSearch}
          disabled={loading}
        >
          <Search className="h-4 w-4" />
        </Button>
        <AnimatePresence>
          {showSuggestions &&
            (suggestions.length > 0 || recentSearches.length > 0) && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: "absolute",
                  zIndex: 10,
                  width: "100%",
                  marginTop: "4px", // equivalente a mt-1
                  backgroundColor: "white",
                  borderRadius: "6px", // equivalente a rounded-md
                  boxShadow:
                    "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", // equivalente a shadow-lg
                }}
              >
                <Command>
                  <CommandList>
                    {recentSearches.length > 0 && (
                      <CommandGroup heading="Recent Searches">
                        {recentSearches.map((search, index) => (
                          <CommandItem
                            key={index}
                            onSelect={() => {
                              setQuery(search);
                              handleSearch();
                            }}
                          >
                            <Clock className="mr-2 h-4 w-4" />
                            {search}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    )}
                    <CommandGroup heading="Suggestions">
                      {suggestions.map((suggestion, index) => (
                        <CommandItem
                          key={suggestion.id}
                          onSelect={() => {
                            setQuery(suggestion.text);
                            handleSearch();
                          }}
                        >
                          {suggestion.text}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                </Command>
              </motion.div>
            )}
        </AnimatePresence>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              Filters
              {showFilters ? (
                <ChevronUp className="ml-2 h-4 w-4" />
              ) : (
                <ChevronDown className="ml-2 h-4 w-4" />
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-4">
              <div>
                <Label htmlFor="certificationType">Certification Type</Label>
                <Select
                  id="certificationType"
                  value={filters.certificationType}
                  onChange={(value) =>
                    handleFilterChange("certificationType", value)
                  }
                  options={["ISO", "NIST", "HIPAA", "PCI DSS"]}
                  multiple
                />
              </div>
              <div>
                <Label htmlFor="industry">Industry</Label>
                <Select
                  id="industry"
                  value={filters.industry}
                  onChange={(value) => handleFilterChange("industry", value)}
                  options={[
                    "Healthcare",
                    "Finance",
                    "Technology",
                    "Manufacturing",
                  ]}
                  multiple
                />
              </div>
              <div>
                <Label>Price Range</Label>
                <Slider
                  min={0}
                  max={1000}
                  step={10}
                  value={filters.priceRange}
                  onValueChange={(value) =>
                    handleFilterChange("priceRange", value)
                  }
                />
                <div className="flex justify-between text-sm mt-1">
                  <span>${filters.priceRange[0]}</span>
                  <span>${filters.priceRange[1]}</span>
                </div>
              </div>
              <div>
                <Label htmlFor="sortBy">Sort By</Label>
                <Select
                  id="sortBy"
                  value={filters.sortBy}
                  onChange={(value) => handleFilterChange("sortBy", value)}
                  options={[
                    { value: "relevance", label: "Relevance" },
                    { value: "price_low_to_high", label: "Price: Low to High" },
                    { value: "price_high_to_low", label: "Price: High to Low" },
                    { value: "newest", label: "Newest" },
                  ]}
                />
              </div>
              <div className="flex justify-between">
                <Button variant="outline" size="sm" onClick={clearFilters}>
                  Clear Filters
                </Button>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm">
                      Presets
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-56">
                    <Command>
                      <CommandList>
                        <CommandGroup heading="Filter Presets">
                          {filterPresets.map((preset, index) => (
                            <CommandItem
                              key={index}
                              onSelect={() => applyPreset(preset)}
                            >
                              {preset.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        {Object.entries(filters).map(([key, value]) => {
          if (Array.isArray(value) && value.length > 0) {
            return value.map((v) => (
              <Button
                key={`${key}-${v}`}
                variant="secondary"
                size="sm"
                onClick={() =>
                  handleFilterChange(
                    key as keyof Filter,
                    value.filter((item) => item !== v)
                  )
                }
              >
                {v}
                <X className="ml-2 h-4 w-4" />
              </Button>
            ));
          }
          if (key === "priceRange" && (value[0] !== 0 || value[1] !== 1000)) {
            return (
              <Button
                key={key}
                variant="secondary"
                size="sm"
                onClick={() =>
                  handleFilterChange(key as keyof Filter, [0, 1000])
                }
              >
                ${value[0]} - ${value[1]}
                <X className="ml-2 h-4 w-4" />
              </Button>
            );
          }
          if (key === "sortBy" && value !== "relevance") {
            return (
              <Button
                key={key}
                variant="secondary"
                size="sm"
                onClick={() =>
                  handleFilterChange(key as keyof Filter, "relevance")
                }
              >
                {value.replace(/_/g, " ")}
                <X className="ml-2 h-4 w-4" />
              </Button>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

interface SelectProps {
  id: string;
  value: string | string[];
  onChange: (value: string | string[]) => void;
  options: string[] | { value: string; label: string }[];
  multiple?: boolean;
}

function Select({ id, value, onChange, options, multiple }: SelectProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          {multiple
            ? `${(value as string[]).length} selected`
            : (
                options.find(
                  (opt) => (typeof opt === "string" ? opt : opt.value) === value
                ) as { label: string }
              )?.label || "Select..."}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search options..." />
          <CommandList>
            <CommandGroup>
              {options.map((option) => {
                const optionValue =
                  typeof option === "string" ? option : option.value;
                const optionLabel =
                  typeof option === "string" ? option : option.label;
                return (
                  <CommandItem
                    key={optionValue}
                    onSelect={() => {
                      if (multiple) {
                        onChange(
                          (value as string[]).includes(optionValue)
                            ? (value as string[]).filter(
                                (v) => v !== optionValue
                              )
                            : [...(value as string[]), optionValue]
                        );
                      } else {
                        onChange(optionValue);
                      }
                    }}
                  >
                    <div className="flex items-center">
                      {multiple && (
                        <Switch
                          checked={(value as string[]).includes(optionValue)}
                          onCheckedChange={() => {}}
                          className="mr-2"
                        />
                      )}
                      {optionLabel}
                    </div>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
