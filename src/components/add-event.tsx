import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function CardWithForm() {
  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>Add event</CardTitle>
        <CardDescription>Add a new event in one-click.</CardDescription>
      </CardHeader>

      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of the event" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="city">City</Label>
              <Select>
                <SelectTrigger id="city">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="sulaimani">Sulaimani</SelectItem>
                  <SelectItem value="hawler">Hawler</SelectItem>
                  <SelectItem value="kirkuk">Kirkuk</SelectItem>
                  <SelectItem value="duhok">Duhok</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Add</Button>
      </CardFooter>
    </Card>
  );
}

