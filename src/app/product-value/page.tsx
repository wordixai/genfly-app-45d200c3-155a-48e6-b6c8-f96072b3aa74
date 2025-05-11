'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const slides = [
  {
    title: 'How to Extract and Present Product Value Highlights',
    subtitle: 'Course Introduction',
    content: (
      <div className="space-y-4">
        <p className="text-xl text-gray-600">Course by: Senior Product Manager</p>
        <p className="text-xl text-gray-600">Audience: Product Manager Students</p>
      </div>
    )
  },
  {
    title: 'Course Outline',
    content: (
      <ul className="space-y-4 text-xl text-left max-w-lg mx-auto">
        <li>• Sharing Team Experiences</li>
        <li>• Step 1: Establish Standards & Templates</li>
        <li>• Step 2: Identify Core Product Features</li>
        <li>• Step 3: Competitive Analysis</li>
        <li>• Step 4: Connect Value to Customer Scenarios</li>
        <li>• Step 5: Overcoming Team Challenges</li>
        <li>• Key Takeaways & Memorable Quotes</li>
      </ul>
    )
  },
  {
    title: 'Team Experience Recap',
    content: (
      <div className="space-y-6 text-lg text-left max-w-3xl">
        <p><span className="font-bold">Mission:</span> Prepare GTM materials for AI education products</p>
        <p><span className="font-bold">Challenge:</span> Team had varied understanding of product value</p>
        <p><span className="font-bold">Solution:</span> Deep collaboration and thorough analysis</p>
        <p><span className="font-bold">Outcome:</span> Effective highlight materials that improved client understanding</p>
      </div>
    )
  },
  {
    title: 'Step 1: Standardize Output with Templates',
    content: (
      <div className="space-y-6 text-left max-w-3xl">
        <div>
          <h3 className="text-xl font-bold">FAB Framework</h3>
          <ul className="mt-2 space-y-2">
            <li>• <span className="font-semibold">Feature:</span> Product characteristics</li>
            <li>• <span className="font-semibold">Advantage:</span> Benefits from features</li>
            <li>• <span className="font-semibold">Benefit:</span> End-user value</li>
          </ul>
          <p className="mt-4 italic">Example: Phone chip offers speed (feature), faster performance (advantage), smoother UX (benefit)</p>
        </div>
      </div>
    )
  }
]

export default function ProductValuePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[1160px] h-[600px] bg-white rounded-xl shadow-lg p-8 flex flex-col">
        <div className="flex-grow flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold mb-4">{slides[currentSlide].title}</h1>
          {slides[currentSlide].subtitle && <h2 className="text-2xl mb-8">{slides[currentSlide].subtitle}</h2>}
          {slides[currentSlide].content}
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-2 rounded-full ${currentSlide === 0 ? 'text-gray-400' : 'text-indigo-600 hover:bg-indigo-50'}`}
          >
            <ArrowLeft size={24} />
          </button>

          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full ${currentSlide === i ? 'bg-indigo-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`p-2 rounded-full ${currentSlide === slides.length - 1 ? 'text-gray-400' : 'text-indigo-600 hover:bg-indigo-50'}`}
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}