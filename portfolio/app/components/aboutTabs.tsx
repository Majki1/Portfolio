'use client';
import { Tabs, useComputedColorScheme } from '@mantine/core'
import { IconBook, IconKeyboard, IconArrowUp } from '@tabler/icons-react';
import { useState } from 'react';

export default function AboutTabs({data}: {data: any}) {

    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
    const [activeTab, setActiveTab] = useState<string | null>('skills');

    return (
        <Tabs defaultValue="skills" color={`${computedColorScheme === 'dark' ? '#C900C2' : 'blue'}`} value={activeTab} onChange={setActiveTab} className={`${computedColorScheme === 'dark' ? 'text-white' : 'text-black'}`}>
        <Tabs.List>
          <Tabs.Tab value="skills" leftSection={<IconArrowUp/>}>
            Skills
          </Tabs.Tab>
          <Tabs.Tab value="education" leftSection={<IconBook/>}>
            Education
          </Tabs.Tab>
          <Tabs.Tab value="experience" leftSection={<IconKeyboard/>}>
            Experience
          </Tabs.Tab>
        </Tabs.List>
  
        <Tabs.Panel value="skills">
        <div className="mt-8">
            {data.find((t:any) => t.id === activeTab).values}
        </div>
        </Tabs.Panel>
  
        <Tabs.Panel value="education">
        <div className="mt-8">
            {data.find((t:any) => t.id === activeTab).values}
        </div>
        </Tabs.Panel>
  
        <Tabs.Panel value="experience">
        <div className="mt-8">
            {data.find((t:any) => t.id === activeTab).values}
        </div>
        </Tabs.Panel>
      </Tabs>
    );
}   