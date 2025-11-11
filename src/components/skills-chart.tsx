'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, LabelList } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import type { Skill } from '@/lib/types';

interface SkillsChartProps {
  skills: Skill[];
}

const chartConfig = {
  proficiency: {
    label: 'Proficiency',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

export default function SkillsChart({ skills }: SkillsChartProps) {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={skills}
          layout="vertical"
          margin={{ left: 10, right: 40 }}
        >
          <CartesianGrid horizontal={false} strokeDasharray="3 3" />
          <XAxis type="number" hide />
          <YAxis
            dataKey="name"
            type="category"
            tickLine={false}
            axisLine={false}
            tick={{ fill: 'hsl(var(--foreground))', fontSize: 14 }}
            width={120}
          />
          <ChartTooltip
            cursor={{ fill: 'hsl(var(--accent) / 0.1)' }}
            content={<ChartTooltipContent />}
          />
          <Bar dataKey="proficiency" layout="vertical" radius={5}>
            <LabelList
              dataKey="proficiency"
              position="right"
              offset={8}
              className="fill-foreground"
              fontSize={12}
              formatter={(value: number) => `${value}%`}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
