"use client";

import { useState, useEffect } from "react";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import { signOut } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bell,
  LogOut,
  Settings,
  User,
  FileText,
  CheckSquare,
  BarChart,
  Moon,
  Sun,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Masonry from "react-masonry-css";

// Mock data (replace with actual data fetching in a real application)
const userData = {
  name: "John Doe",
  accountType: "Premium",
  lastLogin: "2023-05-15T10:30:00Z",
  notifications: [
    { id: 1, message: "New template available", time: "2 hours ago" },
    { id: 2, message: "Audit report ready", time: "1 day ago" },
  ],
  recentActivity: [
    { id: 1, action: "Created new template", time: "3 hours ago" },
    { id: 2, action: "Completed ISO 27001 audit", time: "2 days ago" },
  ],
  metrics: {
    completedAudits: 5,
    activeTemplates: 12,
    complianceScore: 85,
  },
  ongoingCertifications: [
    { name: "ISO 27001", progress: 75 },
    { name: "GDPR Compliance", progress: 40 },
  ],
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function DashboardPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const expandCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div
      className={`min-h-screen bg-background transition-colors duration-300 ${isDarkMode ? "dark" : ""}`}
    >
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 md:pt-6">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <form action={"#"}>
              <Button
                variant="ghost"
                type="submit"
                className="w-full justify-start"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </form>
          </nav>
        </aside>
        <main className="flex w-full flex-1 flex-col space-y-4 overflow-hidden">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Welcome back, {userData.name}!</CardTitle>
                  <CardDescription>
                    {userData.accountType} Account | Last login:{" "}
                    {new Date(userData.lastLogin).toLocaleString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Completed Audits
                        </CardTitle>
                        <CheckSquare className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">
                          {userData.metrics.completedAudits}
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Active Templates
                        </CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">
                          {userData.metrics.activeTemplates}
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Compliance Score
                        </CardTitle>
                        <BarChart className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">
                          {userData.metrics.complianceScore}%
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className={
                  expandedCard === "quickActions"
                    ? "fixed inset-0 z-50 overflow-auto"
                    : ""
                }
              >
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <Button>Create New Template</Button>
                  <Button>Start Audit</Button>
                  <Button>View Reports</Button>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => expandCard("quickActions")}>
                    {expandedCard === "quickActions" ? "Minimize" : "Expand"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className={
                  expandedCard === "recentActivity"
                    ? "fixed inset-0 z-50 overflow-auto"
                    : ""
                }
              >
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {userData.recentActivity.map((activity) => (
                      <li key={activity.id} className="flex justify-between">
                        <span>{activity.action}</span>
                        <span className="text-sm text-muted-foreground">
                          {activity.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => expandCard("recentActivity")}>
                    {expandedCard === "recentActivity" ? "Minimize" : "Expand"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className={
                  expandedCard === "notifications"
                    ? "fixed inset-0 z-50 overflow-auto"
                    : ""
                }
              >
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {userData.notifications.map((notification) => (
                      <li
                        key={notification.id}
                        className="flex justify-between"
                      >
                        <span>{notification.message}</span>
                        <span className="text-sm text-muted-foreground">
                          {notification.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => expandCard("notifications")}>
                    {expandedCard === "notifications" ? "Minimize" : "Expand"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className={
                  expandedCard === "ongoingCertifications"
                    ? "fixed inset-0 z-50 overflow-auto"
                    : ""
                }
              >
                <CardHeader>
                  <CardTitle>Ongoing Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  {userData.ongoingCertifications.map((cert, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span>{cert.name}</span>
                        <span>{cert.progress}%</span>
                      </div>
                      <div className="relative pt-1">
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary/20">
                          <motion.div
                            style={{ width: `${cert.progress}%` }}
                            initial={{ width: 0 }}
                            animate={{ width: `${cert.progress}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          >
                            <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary h-full w-full" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button onClick={() => expandCard("ongoingCertifications")}>
                    {expandedCard === "ongoingCertifications"
                      ? "Minimize"
                      : "Expand"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className={
                  expandedCard === "complianceChart"
                    ? "fixed inset-0 z-50 overflow-auto"
                    : ""
                }
              >
                <CardHeader>
                  <CardTitle>Compliance Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={[
                          {
                            name: "Compliant",
                            value: userData.metrics.complianceScore,
                          },
                          {
                            name: "Non-Compliant",
                            value: 100 - userData.metrics.complianceScore,
                          },
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {[
                          {
                            name: "Compliant",
                            value: userData.metrics.complianceScore,
                          },
                          {
                            name: "Non-Compliant",
                            value: 100 - userData.metrics.complianceScore,
                          },
                        ].map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => expandCard("complianceChart")}>
                    {expandedCard === "complianceChart" ? "Minimize" : "Expand"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </Masonry>
        </main>
      </div>
    </div>
  );
}
