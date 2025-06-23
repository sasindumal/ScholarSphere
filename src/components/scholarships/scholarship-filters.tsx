'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { categories, locations, statuses } from '@/lib/data/scholarships';

const filterSchema = z.object({
  search: z.string(),
  category: z.string().optional(),
  location: z.string().optional(),
  status: z.string().optional(),
});

type FilterValues = z.infer<typeof filterSchema>;

interface ScholarshipFiltersProps {
  onFilterChange: (values: FilterValues) => void;
}

export function ScholarshipFilters({ onFilterChange }: ScholarshipFiltersProps) {
  const form = useForm<FilterValues>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      search: '',
      category: 'all',
      location: 'all',
      status: 'all',
    },
  });

  const onSubmit = (values: FilterValues) => {
    const filteredValues = {
      ...values,
      category: values.category === 'all' ? undefined : values.category,
      location: values.location === 'all' ? undefined : values.location,
      status: values.status === 'all' ? undefined : values.status,
    };
    onFilterChange(filteredValues);
  };

  const handleSearchChange = (value: string) => {
    const values = form.getValues();
    onFilterChange({ ...values, search: value });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onChange={() => form.handleSubmit(onSubmit)()}
        className="space-y-4"
      >
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:justify-between">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:w-[600px]">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      form.handleSubmit(onSubmit)();
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Filter by Category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      form.handleSubmit(onSubmit)();
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Filter by Location" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      {locations.map((location) => (
                        <SelectItem key={location.value} value={location.value}>
                          {location.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      form.handleSubmit(onSubmit)();
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Filter by Status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      {statuses.map((status) => (
                        <SelectItem key={status.value} value={status.value}>
                          {status.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>

          <div className="w-full md:w-[300px]">
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative flex items-center">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                      <Input
                        {...field}
                        placeholder="Search applications..."
                        className="pl-10 h-12 text-base bg-background pr-24"
                        onChange={(e) => {
                          field.onChange(e);
                          handleSearchChange(e.target.value);
                        }}
                      />
                      <Button 
                        type="submit" 
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10"
                        variant="secondary"
                      >
                        Search
                      </Button>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  );
} 