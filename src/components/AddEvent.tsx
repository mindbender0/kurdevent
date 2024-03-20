import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function CardWithForm() {
  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Add event</CardTitle>
        <CardDescription>Add a new event in one-click.</CardDescription>
      </CardHeader>

      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' placeholder='Name of the event' />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='framework'>City</Label>
              <Select>
                <SelectTrigger id='framework'>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent position='popper'>
                  <SelectItem value='next'>Sulaimani</SelectItem>
                  <SelectItem value='sveltekit'>Hawler</SelectItem>
                  <SelectItem value='astro'>Kirkuk</SelectItem>
                  <SelectItem value='nuxt'>Duhok</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className='flex justify-between'>
        <Button variant='outline'>Cancel</Button>
        <Button>Add</Button>
      </CardFooter>
    </Card>
  );
}
