import { useState } from 'react';
import { TrendingUp, BookOpen, MessageCircle, Calendar, Plus } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';

const Dashboard = () => {
  const [currentMood] = useState(7);
  
  const recentEntries = [
    { id: 1, text: "Had a great study session today...", mood: 8, date: "2024-01-15" },
    { id: 2, text: "Feeling anxious about upcoming exams...", mood: 4, date: "2024-01-14" },
    { id: 3, text: "Really enjoyed the mindfulness exercise...", mood: 9, date: "2024-01-13" },
  ];

  const recommendations = [
    "Try a 10-minute breathing exercise",
    "Take a short walk outside",
    "Practice gratitude journaling",
    "Listen to calming music",
  ];

  const moodData = [
    { date: "Mon", mood: 6 },
    { date: "Tue", mood: 7 },
    { date: "Wed", mood: 5 },
    { date: "Thu", mood: 8 },
    { date: "Fri", mood: 7 },
    { date: "Sat", mood: 9 },
    { date: "Sun", mood: 7 },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back!</h1>
          <p className="text-muted-foreground">How are you feeling today?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Current Mood */}
          <Card className="border-0 shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Current Mood</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-2">{currentMood}/10</div>
              <Progress value={currentMood * 10} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">Feeling good today</p>
            </CardContent>
          </Card>

          {/* Journal Entries */}
          <Card className="border-0 shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Journal Entries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-2">12</div>
              <p className="text-xs text-muted-foreground">+3 this week</p>
            </CardContent>
          </Card>

          {/* Chat Sessions */}
          <Card className="border-0 shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Chat Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-2">8</div>
              <p className="text-xs text-muted-foreground">+2 this week</p>
            </CardContent>
          </Card>

          {/* Streak */}
          <Card className="border-0 shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Current Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-2">5 days</div>
              <p className="text-xs text-muted-foreground">Keep it up!</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mood Trends */}
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Mood Trends
              </CardTitle>
              <CardDescription>Your mood over the past week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {moodData.map((data, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{data.date}</span>
                    <div className="flex items-center gap-2">
                      <Progress value={data.mood * 10} className="w-20 h-2" />
                      <span className="text-sm font-medium w-8">{data.mood}/10</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Continue your wellness journey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild className="w-full justify-start">
                <NavLink to="/journal">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Write in Journal
                </NavLink>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <NavLink to="/chat">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat with AI
                </NavLink>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Track Mood
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Entries and Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Recent Entries */}
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle>Recent Journal Entries</CardTitle>
              <CardDescription>Your latest thoughts and reflections</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentEntries.map((entry) => (
                <div key={entry.id} className="p-3 bg-muted rounded-lg">
                  <p className="text-sm text-foreground mb-2 line-clamp-2">{entry.text}</p>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>{entry.date}</span>
                    <span>Mood: {entry.mood}/10</span>
                  </div>
                </div>
              ))}
              <Button asChild variant="outline" size="sm" className="w-full">
                <NavLink to="/journal">View All Entries</NavLink>
              </Button>
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle>Personalized Recommendations</CardTitle>
              <CardDescription>Based on your recent entries</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {recommendations.map((rec, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-primary-soft rounded-lg">
                  <div className="bg-primary p-1 rounded-full">
                    <Plus className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-foreground">{rec}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;