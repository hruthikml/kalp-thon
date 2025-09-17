import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your mental health companion. I'm here to listen and support you. How are you feeling today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(inputValue),
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes('stress') || lowerInput.includes('anxious')) {
      return "I understand you're feeling stressed. That's completely normal, especially as a student. Here are some techniques that might help: try deep breathing exercises (4-7-8 breathing), take short breaks every hour, or try a 5-minute mindfulness meditation. Would you like me to guide you through any of these?";
    }
    
    if (lowerInput.includes('exam') || lowerInput.includes('test')) {
      return "Exam stress is very common! Remember that you've prepared as best you can. Try these strategies: review your notes briefly instead of cramming, get a good night's sleep, eat a healthy breakfast, and arrive early to settle in. Remember, one exam doesn't define you. How has your preparation been going?";
    }
    
    if (lowerInput.includes('lonely') || lowerInput.includes('alone')) {
      return "Feeling lonely can be really difficult. You're not alone in feeling this way - many students experience loneliness. Consider reaching out to classmates, joining study groups or clubs, or connecting with campus resources. Sometimes even a small interaction can help. Is there a particular situation that's making you feel this way?";
    }
    
    if (lowerInput.includes('sleep') || lowerInput.includes('tired')) {
      return "Sleep is so important for mental health and academic performance. Try establishing a bedtime routine: limit screens an hour before bed, keep your room cool and dark, and try some light stretching or reading. Aim for 7-9 hours when possible. What's your current sleep schedule like?";
    }
    
    return "Thank you for sharing that with me. It's important to acknowledge your feelings. Remember that it's okay to have difficult days - they're part of the human experience. What matters is that you're taking steps to care for your mental health. Is there anything specific you'd like to talk about or explore?";
  };

  const quickReplies = [
    "I'm feeling stressed",
    "Help with anxiety",
    "Study tips",
    "Feeling overwhelmed",
  ];

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">AI Companion</h1>
          <p className="text-muted-foreground">Your 24/7 mental health support companion</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-card h-[600px] flex flex-col">
              <CardHeader className="border-b border-border">
                <CardTitle className="flex items-center gap-2">
                  <div className="bg-gradient-calm p-2 rounded-full">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  AI Companion
                  <Badge variant="secondary" className="ml-auto bg-primary-soft text-primary border-0">
                    Online
                  </Badge>
                </CardTitle>
              </CardHeader>
              
              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-6">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      {!message.isUser && (
                        <div className="bg-gradient-calm p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                      )}
                      
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.isUser
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p className={`text-xs mt-2 opacity-70`}>
                          {message.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>

                      {message.isUser && (
                        <div className="bg-primary p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                          <User className="h-4 w-4 text-primary-foreground" />
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex gap-3 justify-start">
                      <div className="bg-gradient-calm p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-muted text-foreground rounded-2xl px-4 py-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              {/* Quick Replies */}
              {messages.length === 1 && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-muted-foreground mb-3">Quick suggestions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickReply(reply)}
                        className="text-xs"
                      >
                        {reply}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="border-t border-border p-4">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button 
                    onClick={handleSendMessage} 
                    disabled={!inputValue.trim() || isTyping}
                    className="px-4"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Support Info */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Heart className="h-5 w-5 text-primary" />
                  Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium text-foreground mb-1">Available 24/7</p>
                    <p className="text-muted-foreground">Your AI companion is always here to listen and support you.</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Confidential</p>
                    <p className="text-muted-foreground">All conversations are private and encrypted.</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Non-judgmental</p>
                    <p className="text-muted-foreground">Share your thoughts without fear of judgment.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Resources */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Emergency Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-foreground">Crisis Text Line</p>
                    <p className="text-muted-foreground">Text HOME to 741741</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">National Suicide Prevention Lifeline</p>
                    <p className="text-muted-foreground">988</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Campus Counseling</p>
                    <p className="text-muted-foreground">Contact your student health center</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;