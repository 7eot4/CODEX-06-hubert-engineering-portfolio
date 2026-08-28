export type Status = 'active' | 'developing' | 'concept' | 'verify';

export const profile = {
  identity: {
    name: 'Hubert',
    title: 'Electrical Engineer / Intelligent Systems',
    location: 'Europe / Norway',
    availability: 'International engineering environments',
    headline: 'From electrical systems to intelligent systems.',
    summary: 'Electrical engineer connecting physical infrastructure with automation, software and artificial intelligence.',
    bio: [
      'My engineering path began in real installations: electrical infrastructure, industrial equipment, control cabinets, sensors and drives.',
      'Today, I am extending that foundation through automation, networks, software and AI — building the ability to understand the complete system, from hardware to intelligence.',
    ],
  },
  navigation: [
    { label: 'Profile', href: '#profile' },
    { label: 'Stack', href: '#stack' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#work' },
    { label: 'Trajectory', href: '#trajectory' },
    { label: 'Contact', href: '#contact' },
  ],
  stack: [
    { code: 'ELC', title: 'Electrical', description: 'Physical infrastructure and low-voltage systems.', items: ['Electrical engineering', 'LV systems', 'Electrical installations', 'Measurements', 'Switchboards', 'Industrial electrical systems'] },
    { code: 'AUT', title: 'Industrial / Automation', description: 'Control, actuation and operational systems.', items: ['Sensors', 'Drives', 'VFD', 'Control systems', 'Monitoring systems', 'Marine electrical systems'] },
    { code: 'DSN', title: 'Design', description: 'Engineering intent translated into buildable documentation.', items: ['AutoCAD', 'BricsCAD', 'Revit', 'Technical documentation', 'Electrical schematics', 'As-built documentation'] },
    { code: 'SFT', title: 'Software / Digital', description: 'Tools that automate work and connect technical systems.', items: ['Python', 'Web technologies', 'APIs', 'Automation', 'Git', 'AI-assisted development'] },
    { code: 'SYS', title: 'Systems / AI', description: 'Integrated infrastructure with a digital control layer.', items: ['AI agents', 'LLM integrations', 'Workflow automation', 'IoT', 'Home Assistant', 'Network infrastructure'] },
  ],
  experience: [
    { location: 'Poland', stage: 'Electrical foundations', scope: 'Electrical installations, measurements and practical execution.', signal: 'INSTALLATION' },
    { location: 'Germany / Belgium', stage: 'Industrial execution', scope: 'International electrical and industrial project environments.', signal: 'INDUSTRY' },
    { location: 'Ireland', stage: 'Engineering mobility', scope: 'Technical work in a multicultural, international environment.', signal: 'INTEGRATION' },
    { location: 'Norway', stage: 'Marine systems', scope: 'Shipyard and vessel installations, monitoring, safety, control cabinets and sensors.', signal: 'MARINE' },
    { location: 'Current direction', stage: 'Intelligent systems', scope: 'Connecting engineering practice with automation, software, networks and AI.', signal: 'SYSTEMS' },
  ],
  projects: [
    { code: 'SYS-01', category: 'AI systems', title: 'Personal AI Operations System', description: 'A developing layer of agents, automations and tools designed to support real personal workflows.', technologies: ['AI agents', 'Automation', 'APIs', 'Software'], status: 'developing' as Status },
    { code: 'SYS-02', category: 'Smart home', title: 'Intelligent Home Infrastructure', description: 'A system-first concept joining Home Assistant, IoT, monitoring, sensors and dedicated network infrastructure.', technologies: ['Home Assistant', 'IoT', 'Networks', 'Monitoring'], status: 'concept' as Status },
    { code: 'ENG-01', category: 'Marine', title: 'Marine Electrical Systems', description: 'Field experience across vessel and shipyard electrical installations. Project details remain confidential.', technologies: ['Control cabinets', 'Sensors', 'Safety', 'Monitoring'], status: 'active' as Status },
    { code: 'ENG-02', category: 'Engineering', title: 'Electrical Design & Documentation', description: 'Design work covering LV distribution, equipment supply, controls and technical documentation.', technologies: ['AutoCAD', 'BricsCAD', 'LV systems', 'Documentation'], status: 'active' as Status },
  ],
  trajectory: [
    { number: '01', label: 'Electrical engineering', state: 'foundation' },
    { number: '02', label: 'Industrial systems', state: 'applied' },
    { number: '03', label: 'Automation', state: 'expanding' },
    { number: '04', label: 'Software engineering', state: 'developing' },
    { number: '05', label: 'Artificial intelligence', state: 'developing' },
    { number: '06', label: 'Integrated intelligent systems', state: 'destination' },
  ],
  education: [
    { level: 'Technical education', field: 'Electrician', status: 'completed' },
    { level: "Engineer's degree / B.Eng.", field: 'Electrical Engineering', status: 'completed' },
    { level: "Master's degree", field: 'International programme — details to be defined', status: 'planned' },
  ],
  certifications: [
    { name: 'SEP', status: 'verify exact scope and validity' },
    { name: 'DSB Norway', status: 'verify current status' },
    { name: 'Safe Pass', status: 'verify current validity' },
    { name: 'Manual Handling', status: 'verify current validity' },
    { name: 'IPAF', status: 'verify current validity' },
  ],
  contact: {
    email: '',
    linkedin: '',
    github: 'https://github.com/7eot4',
    note: 'Contact links are intentionally disabled until verified details are added in app/data/profile.ts.',
  },
} as const;
