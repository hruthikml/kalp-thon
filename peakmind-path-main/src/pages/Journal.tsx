import { useState } from 'react';
import { Save, Calendar, TrendingUp, Smile, Meh, Frown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';

const Journal = () => {
  const [journalText, setJournalText] = useState('');
  const [mood, setMood] = useState([7]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleSave = async () => {
    if (!journalText.trim()) {
      toast({
        title: "Empty Entry",
        description: "Please write something before saving.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      toast({
        title: "Entry Saved!",
        description: "Your journal entry has been saved and analyzed.",
      });
      setJournalText('');
      setMood([7]);
    }, 2000);
  };

  const getMoodIcon = (value: number) => {
    if (value <= 3) return <Frown className="h-5 w-5 text-destructive" />;
    if (value <= 7) return <Meh className="h-5 w-5 text-muted-foreground" />;
    return <Smile className="h-5 w-5 text-primary" />;
  };

  const getMoodColor = (value: number) => {
    if (value <= 3) return 'text-destructive';
    if (value <= 7) return 'text-muted-foreground';
    return 'text-primary';
  };

  const recentEntries = [
    {
      id: 1,
      date: '2024-01-15',
      text: 'Had a productive day studying for my chemistry exam. Feeling confident about tomorrow\'s test.',
      mood: 8,
      keywords: ['studying', 'confident', 'productive'],
      sentiment: 'positive'
    },
    {
      id: 2,
      date: '2024-01-14',
      text: 'Feeling overwhelmed with all the assignments due this week. Need to better manage my time.',
      mood: 4,
      keywords: ['overwhelmed', 'assignments', 'time management'],
      sentiment: 'negative'
    },
    {
      id: 3,
      date: '2024-01-13',
      text: 'Great meditation session this morning. Feeling centered and ready for the day ahead.',
      mood: 9,
      keywords: ['meditation', 'centered', 'morning routine'],
      sentiment: 'positive'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Journal</h1>
          <p className="text-muted-foreground">Express your thoughts and track your mental wellbeing</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Journal Entry Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  New Journal Entry
                </CardTitle>
                <CardDescription>
                  Write about your day, thoughts, or feelings. Our AI will provide insights to help support your wellbeing.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Mood Selector */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    How are you feeling today?
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Very Low</span>
                      <div className="flex items-center gap-2">
                        {getMoodIcon(mood[0])}
                        <span className={`text-lg font-semibold ${getMoodColor(mood[0])}`}>
                          {mood[0]}/10
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">Very High</span>
                    </div>
                    <Slider
                      value={mood}
                      onValueChange={setMood}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Text Area */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    What's on your mind?
                  </label>
                  <Textarea
                    value={journalText}
                    onChange={(e) => setJournalText(e.target.value)}
                    placeholder="Start writing about your day, your feelings, or anything that's on your mind..."
                    className="min-h-[200px] resize-none"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    {journalText.length} characters
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button onClick={handleSave} disabled={isAnalyzing} className="flex-1">
                    {isAnalyzing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Save & Analyze
                      </>
                    )}
                  </Button>
                  <Button variant="outline" onClick={() => setJournalText('')}>
                    Clear
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Mood Insights */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Mood Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Weekly Average</p>
                    <div className="flex items-center gap-2">
                      <Smile className="h-4 w-4 text-primary" />
                      <span className="text-lg font-semibold text-primary">7.2/10</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Trend</p>
                    <Badge variant="secondary" className="bg-primary-soft text-primary border-0">
                      Improving ↗️
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Writing Tips */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Writing Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>• Write about specific events from your day</p>
                  <p>• Express your emotions honestly</p>
                  <p>• Include what you're grateful for</p>
                  <p>• Note any challenges you faced</p>
                  <p>• Reflect on what you learned</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Entries */}
        <div className="mt-8">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle>Recent Entries</CardTitle>
              <CardDescription>Your past journal entries and AI insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recentEntries.map((entry) => (
                  <div key={entry.id} className="border-l-4 border-primary pl-6 pb-6 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-muted-foreground">{entry.date}</p>
                      <div className="flex items-center gap-2">
                        {getMoodIcon(entry.mood)}
                        <span className={`text-sm font-medium ${getMoodColor(entry.mood)}`}>
                          {entry.mood}/10
                        </span>
                      </div>
                    </div>
                    <p className="text-foreground mb-3">{entry.text}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={entry.sentiment === 'positive' ? 'default' : 'secondary'}>
                        {entry.sentiment}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {entry.keywords.map((keyword, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Journal;