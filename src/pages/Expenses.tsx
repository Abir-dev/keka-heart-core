import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockExpenses } from '@/data/mockData';
import { FileText, Plus, Upload, DollarSign, Calendar, CheckCircle, XCircle } from 'lucide-react';

const Expenses: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const expenseCategories = ['Travel', 'Meals', 'Office Supplies', 'Software', 'Training', 'Marketing', 'Other'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Expense Management</h1>
          <p className="text-muted-foreground">Submit and track your expense claims</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Expense
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Total Submitted</div>
                <div className="text-xl font-bold">$2,340</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <div>
                <div className="text-sm text-muted-foreground">Approved</div>
                <div className="text-xl font-bold">$1,890</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-warning" />
              <div>
                <div className="text-sm text-muted-foreground">Pending</div>
                <div className="text-xl font-bold">$450</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <XCircle className="h-5 w-5 text-destructive" />
              <div>
                <div className="text-sm text-muted-foreground">Rejected</div>
                <div className="text-xl font-bold">$0</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="submit" className="space-y-4">
        <TabsList>
          <TabsTrigger value="submit">Submit Expense</TabsTrigger>
          <TabsTrigger value="claims">My Claims</TabsTrigger>
          <TabsTrigger value="approve">Approve Claims</TabsTrigger>
        </TabsList>

        <TabsContent value="submit">
          <Card>
            <CardHeader>
              <CardTitle>Submit New Expense</CardTitle>
              <CardDescription>
                Submit a new expense claim for reimbursement
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {expenseCategories.map(cat => (
                        <SelectItem key={cat} value={cat.toLowerCase()}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your expense..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>Receipt Upload</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Drag and drop your receipt or click to browse
                  </p>
                  <Button variant="outline" size="sm">
                    Choose File
                  </Button>
                </div>
              </div>

              <Button className="w-full md:w-auto">
                Submit Expense Claim
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="claims">
          <Card>
            <CardHeader>
              <CardTitle>My Expense Claims</CardTitle>
              <CardDescription>
                Track the status of your submitted expense claims
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockExpenses.map((expense) => (
                  <div key={expense.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{expense.description}</div>
                        <div className="text-sm text-muted-foreground">
                          {expense.category} • {expense.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="font-medium">${expense.amount.toFixed(2)}</div>
                        <Badge variant={
                          expense.status === 'approved' ? 'default' :
                          expense.status === 'rejected' ? 'destructive' :
                          'secondary'
                        }>
                          {expense.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="approve">
          <Card>
            <CardHeader>
              <CardTitle>Pending Approvals</CardTitle>
              <CardDescription>
                Expense claims requiring your approval
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockExpenses.filter(e => e.status === 'pending').map((expense) => (
                  <div key={expense.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                        {expense.employeeName.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-medium">{expense.employeeName}</div>
                        <div className="text-sm text-muted-foreground">{expense.description}</div>
                        <div className="text-sm text-muted-foreground">
                          {expense.category} • {expense.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right mr-4">
                        <div className="font-medium">${expense.amount.toFixed(2)}</div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-success hover:bg-success/90">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button size="sm" variant="destructive">
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Expenses;