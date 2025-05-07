
import Wordpress from '../components/icons/Wordpress.vue'
import UX from '../components/icons/UX.vue'
import Frontend from '../components/icons/Frontend.vue'
import API from '../components/icons/API.vue'
import ProblemSolving from '../components/icons/ProblemSolving.vue'
export const offerings = [
    {
        title: 'Front-End Development',
        description: 'I build performant, responsive, and accessible interfaces using modern frameworks and workflows.',
        points: ['Vue.js & Nuxt.js', 'Tailwind & Bootstrap', 'GSAP & Motion Design'],
        icon: Frontend,
        textColor: 'text-toxic-mint',
    },
    {
        title: 'Custom WordPress Builds',
        description: 'Modular and maintainable WordPress sites using ACF, Sage, and custom blocks.',
        points: ['ACF + Block Development', 'Theme Optimization', 'Bedrock/Trellis Stack'],
        icon: Wordpress,
        textColor: 'text-lime-glow',
    },
    {
        title: 'UI/UX Strategy',
        description: 'Collaborative design/dev feedback loops to ensure UI systems support real-world use cases.',
        points: ['Design-Dev Bridge', 'Reusable Components', 'Accessibility First'],
        icon: UX,
        textColor: 'text-hot-coral'
    },
    {
        title: 'API Integrations',
        description: 'I wire up third-party data in ways that are efficient, flexible, and reliable.',
        points: ['Airtable & Headless CMS', 'REST/GraphQL Consumption', 'Dynamic Filtering & Pagination'],
        icon: API,
        textColor: 'text-electric-purple',
    },
    {
        title: 'Creative Tech Problem Solving',
        description: 'Whether the brief is loose, messy, or deeply complex—I break it down and get it working. From branding launches to press strategies, I bring a cross-disciplinary mindset shaped by years of managing communications, PR, and digital systems across mission-driven orgs and creative teams.',
        points: ['Systems Thinking', 'Cross-Channel Coordination', 'Project Management', 'Rapid Prototyping', 'Technical & Strategic Advising'],
        textColor: 'text-lime-glow',
        icon: ProblemSolving,
    },
];