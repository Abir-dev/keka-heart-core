import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockAttendance, mockEmployees } from '@/data/mockData';
import { Clock, CheckCircle, XCircle, MapPin, Camera, Calendar as CalendarIcon } from 'lucide-react';

const Attendance: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const clockIn = () => {
    console.log('Clock in clicked');
  };

  const clockOut = () => {
    console.log('Clock out clicked');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Attendance Management</h1>
          <p className="text-muted-foreground">Track and manage employee attendance</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Clock In/Out Section */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Time Tracking
            </CardTitle>
            <CardDescription>Clock in and out for today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center p-6 border-2 border-dashed border-border rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
              <div className="text-sm text-muted-foreground mb-4">
                {new Date().toLocaleDateString([], { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex space-x-4 justify-center">
                <Button onClick={clockIn} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Clock In</span>
                </Button>
                <Button onClick={clockOut} variant="outline" className="flex items-center space-x-2">
                  <XCircle className="h-4 w-4" />
                  <span>Clock Out</span>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-success">8.5h</div>
                  <div className="text-sm text-muted-foreground">Today's Hours</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">40h</div>
                  <div className="text-sm text-muted-foreground">This Week</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">172h</div>
                  <div className="text-sm text-muted-foreground">This Month</div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Calendar */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2" />
              Calendar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="today" className="space-y-4">
        <TabsList>
          <TabsTrigger value="today">Today's Attendance</TabsTrigger>
          <TabsTrigger value="history">Attendance History</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="today">
          <Card>
            <CardHeader>
              <CardTitle>Today's Attendance Summary</CardTitle>
              <CardDescription>
                Real-time attendance status for all employees
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-success/10 rounded-lg">
                  <div className="text-2xl font-bold text-success">231</div>
                  <div className="text-sm text-muted-foreground">Present</div>
                </div>
                <div className="text-center p-4 bg-destructive/10 rounded-lg">
                  <div className="text-2xl font-bold text-destructive">8</div>
                  <div className="text-sm text-muted-foreground">Absent</div>
                </div>
                <div className="text-center p-4 bg-warning/10 rounded-lg">
                  <div className="text-2xl font-bold text-warning">5</div>
                  <div className="text-sm text-muted-foreground">Late</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">On Leave</div>
                </div>
              </div>

              <div className="space-y-4">
                {mockAttendance.map((record) => {
                  const employee = mockEmployees.find(e => e.employeeId === record.employeeId);
                  return (
                    <div key={record.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                          {employee?.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-medium">{employee?.name}</div>
                          <div className="text-sm text-muted-foreground">{employee?.department}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="font-medium">{record.clockIn}</div>
                          <div className="text-sm text-muted-foreground">Clock In</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{record.clockOut || '--:--'}</div>
                          <div className="text-sm text-muted-foreground">Clock Out</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={record.status === 'present' ? 'default' : 'destructive'}>
                            {record.status}
                          </Badge>
                          {record.method === 'biometric' && <CheckCircle className="h-4 w-4 text-success" />}
                          {record.method === 'geo' && <MapPin className="h-4 w-4 text-primary" />}
                          {record.method === 'selfie' && <Camera className="h-4 w-4 text-warning" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Attendance History</CardTitle>
              <CardDescription>
                Historical attendance records and patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                Attendance history will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Reports</CardTitle>
              <CardDescription>
                Generate and download attendance reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                Attendance reports will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Attendance;