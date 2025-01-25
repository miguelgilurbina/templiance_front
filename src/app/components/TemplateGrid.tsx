"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface Template {
  id: string;
  title: string;
  description: string;
  price: number;
  certificationType: string;
  previewImage: string;
  industry: string;
}

interface TemplateGridProps {
  templates: Template[];
  onTemplateSelect: (template: Template) => void;
  loading: boolean;
  error: string | null;
}

const TemplateCard = ({
  template,
  onSelect,
}: {
  template: Template;
  onSelect: () => void;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      style={{ height: "100%" }}
    >
      <Card className="h-full flex flex-col transition-shadow duration-300 hover:shadow-lg">
        <CardHeader className="p-0">
          <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
            <Image
              src={template.previewImage || "/placeholder.svg"}
              alt={template.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105 object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <CardTitle className="text-lg font-semibold mb-2">
            {template.title}
          </CardTitle>
          <p className="text-sm text-secondary mb-2">
            {template.certificationType}
          </p>
          <p className="text-sm text-secondary mb-4">{template.industry}</p>
          <p className="text-sm line-clamp-2">{template.description}</p>
        </CardContent>
        <CardFooter className="p-4 flex justify-between items-center">
          <span className="text-lg font-bold text-primary">
            ${template.price.toFixed(2)}
          </span>
          <Button onClick={onSelect} variant="outline" className="group">
            View Details
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const SkeletonCard = () => (
  <Card className="h-full flex flex-col">
    <CardHeader className="p-0">
      <Skeleton className="aspect-video w-full rounded-t-lg" />
    </CardHeader>
    <CardContent className="flex-grow p-4">
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/2 mb-2" />
      <Skeleton className="h-4 w-1/3 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full" />
    </CardContent>
    <CardFooter className="p-4 flex justify-between items-center">
      <Skeleton className="h-6 w-16" />
      <Skeleton className="h-10 w-32" />
    </CardFooter>
  </Card>
);

export default function TemplateGrid({
  templates,
  onTemplateSelect,
  loading,
  error,
}: TemplateGridProps) {
  const [visibleTemplates, setVisibleTemplates] = useState<Template[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);

  const loadMoreTemplates = async () => {
    if (loadingMore) return;
    try {
      setLoadingMore(true);
      // Simulating API call with setTimeout
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const nextTemplates = templates.slice((page - 1) * 12, page * 12);
      setVisibleTemplates((prev) => [...prev, ...nextTemplates]);
      setPage((prev) => prev + 1);
      setHasMore(page * 12 < templates.length);
    } catch (error) {
      console.error("Error loading more templates:", error);
    } finally {
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    loadMoreTemplates();
  }, []);

  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasMore && !loadingMore) {
      loadMoreTemplates();
    }
  }, [inView, hasMore, loadingMore, loadMoreTemplates]);

  if (error) {
    return (
      <div className="flex items-center justify-center h-64 bg-red-50 rounded-lg">
        <AlertCircle className="text-red-500 mr-2" />
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading && !visibleTemplates.length
          ? Array.from({ length: 12 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : visibleTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onSelect={() => onTemplateSelect(template)}
              />
            ))}
      </div>
      {hasMore && (
        <div ref={ref} className="flex justify-center">
          <Button
            onClick={loadMoreTemplates}
            disabled={loadingMore}
            variant="outline"
          >
            {loadingMore ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}
    </div>
  );
}
