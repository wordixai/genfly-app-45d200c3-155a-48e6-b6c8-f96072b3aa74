import { ArrowLeft, ArrowRight, Presentation } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const slides = [
  {
    title: 'How to Extract and Present Product Value Highlights',
    subtitle: 'Course Introduction',
    content: (
      <div>
        <p className="text-xl text-gray-600">Course by: Senior Product Manager</p>
        <p className="text-xl text-gray-600 mt-4">Audience: Product Manager Students</p>
      </div>
    ),
    bgImage: '/images/product-management.jpg'
  },
  {
    title: 'Course Outline',
    content: (
      <ul className="space-y-4 text-xl text-left">
        <li>• Sharing Team Experiences</li>
        <li>• Step 1: Establish Standards & Templates</li>
        <li>• Step 2: Identify Core Product Features</li>
        <li>• Step 3: Competitive Analysis</li>
        <li>• Step 4: Connect Value to Customer Scenarios</li>
        <li>• Step 5: Overcoming Team Challenges</li>
        <li>• Key Takeaways & Memorable Quotes</li>
      </ul>
    ),
    bgImage: '/images/roadmap.jpg'
  },
  {
    title: 'Team Experience Recap',
    content: (
      <div className="space-y-4 text-lg text-left">
        <p><span className="font-bold">Mission:</span> Prepare GTM materials for AI education products (AI course creation, assessment, learning maps, and practice systems)</p>
        <p><span className="font-bold">Challenge:</span> Team had varied understanding of product value; crowded AI market made differentiation difficult</p>
        <p><span className="font-bold">Solution:</span> Deep collaboration, thorough analysis of product strengths and market needs</p>
        <p><span className="font-bold">Outcome:</span> Effective highlight materials that improved client understanding and interest</p>
      </div>
    ),
    bgImage: '/images/team-collab.jpg'
  },
  {
    title: 'Step 1: Standardize Output with Templates',
    content: (
      <div className="space-y-6 text-left">
        <div>
          <h3 className="text-xl font-bold">FAB Framework</h3>
          <ul className="mt-2 space-y-2">
            <li>• <span className="font-semibold">Feature:</span> Product characteristics</li>
            <li>• <span className="font-semibold">Advantage:</span> Benefits from features</li>
            <li>• <span className="font-semibold">Benefit:</span> End-user value</li>
          </ul>
          <p className="mt-4 italic">Example: Phone chip offers speed (feature), faster performance (advantage), smoother user experience (benefit)</p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold">Poster Template</h3>
          <p>International conference poster format with clear sizing, typography, and layout guidelines for consistency</p>
        </div>
      </div>
    ),
    bgImage: '/images/templates.jpg'
  },
  {
    title: 'Step 2: Identify Core Features',
    content: (
      <div className="space-y-6 text-left">
        <div>
          <h3 className="text-xl font-bold">Finding Product Distinctiveness</h3>
          <ul className="mt-2 space-y-2">
            <li>• Examine most resource-intensive design elements</li>
            <li>• Search for "unique to us" or "better than others" aspects</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold">Differentiation Criteria</h3>
          <p><span className="font-semibold">Novelty:</span> Features competitors lack</p>
          <p><span className="font-semibold">Superiority:</span> Features we execute better</p>
          <p className="italic mt-2">Example: Image software processing videos when others only handle photos</p>
        </div>
      </div>
    ),
    bgImage: '/images/features.jpg'
  },
  {
    title: 'Step 3: Competitive Analysis',
    content: (
      <div className="space-y-6 text-left">
        <div>
          <h3 className="text-xl font-bold">Market Research Approach</h3>
          <ul className="mt-2 space-y-2">
            <li>• Compare features, performance, UX</li>
            <li>• Analyze market share and sales</li>
            <li>• Review customer feedback and ratings</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold">Communicating Advantages</h3>
          <p>Translate technical details into customer benefits:</p>
          <p className="italic mt-2">Change "advanced algorithm" to "saves you 5 hours weekly"</p>
        </div>
      </div>
    ),
    bgImage: '/images/competitive.jpg'
  },
  {
    title: 'Step 4: Customer Scenario Alignment',
    content: (
      <div className="space-y-6 text-left">
        <div>
          <h3 className="text-xl font-bold">Customer-Centric Analysis</h3>
          <p>Understand actual usage contexts to demonstrate value</p>
          <p className="italic mt-2">Example: Security for finance teams vs. collaboration for creative teams</p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold">Value Framing Techniques</h3>
          <ul className="mt-2 space-y-2">
            <li>• Enables new capabilities</li>
            <li>• Improves difficult tasks</li>
            <li>• Demonstrates work impact</li>
            <li>• Meets leadership priorities</li>
          </ul>
        </div>
        <p className="mt-4">Key test: "Would I care about this benefit as a customer?"</p>
      </div>
    ),
    bgImage: '/images/customer.jpg'
  },
  {
    title: 'Step 5: Team Development',
    content: (
      <div className="space-y-6 text-left">
        <div>
          <h3 className="text-xl font-bold">Training Process</h3>
          <ul className="mt-2 space-y-2">
            <li>• Provide detailed FAB templates</li>
            <li>• Conduct specialized training sessions</li>
            <li>• Implement phased reviews:
              <ul className="ml-4 mt-1 space-y-1">
                <li>- Phase 1: Content completeness</li>
                <li>- Phase 2: Logical flow</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold">Content Refinement</h3>
          <p>Use AI tools to:</p>
          <ul className="mt-2 space-y-2">
            <li>• Reduce wordiness</li>
            <li>• Increase engagement</li>
            <li>• Improve clarity</li>
          </ul>
        </div>
      </div>
    ),
    bgImage: '/images/training.jpg'
  },
  {
    title: 'Key Takeaways',
    content: (
      <div className="space-y-6 text-center">
        <div className="bg-white bg-opacity-90 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-indigo-700 mb-4">Process Mnemonic:</h3>
          <p className="text-3xl font-bold">"Standardize, Identify, Compare, Connect, Develop"</p>
        </div>
        
        <div className="mt-6 bg-white bg-opacity-90 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-indigo-700 mb-4">Golden Rule:</h3>
          <p className="text-2xl italic">"Adopt the customer perspective - clearly answer why they should choose your product."</p>
        </div>
      </div>
    ),
    bgImage: '/images/takeaways.jpg'
  }
];

export default function ProductValuePresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100">
      {/* Background image (simulated due to Unsplash URL constraint) */}
      <div 
        className="absolute inset-0 bg-gray-900 opacity-30 z-10"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=3000&auto=format&fit=crop)` }}
      ></div>
      
      {/* Slide content */}
      <div className="relative z-20 w-full h-full flex flex-col justify-center">
        <div className="bg-white bg-opacity-90 min-w-[1160px] min-h-[600px] mx-auto p-16 rounded-xl shadow-2xl overflow-y-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-indigo-800 mb-2">{slides[currentSlide].title}</h1>
            {slides[currentSlide].subtitle && <h2 className="text-2xl text-indigo-600">{slides[currentSlide].subtitle}</h2>}
          </div>
          
          <div className="prose prose-lg max-w-none">
            {slides[currentSlide].content}
          </div>
        </div>
        
        {/* Navigation controls */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-3 rounded-full ${currentSlide === 0 ? 'bg-gray-300 text-gray-500' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
          >
            <ArrowLeft size={24} />
          </button>
          
          <div className="flex items-center space-x-1">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-indigo-600' : 'bg-indigo-300'}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`p-3 rounded-full ${currentSlide === slides.length - 1 ? 'bg-gray-300 text-gray-500' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}