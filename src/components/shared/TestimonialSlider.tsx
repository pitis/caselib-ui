'use client'

import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    id: 1,
    text: 'Aplicația Caselib m-a surprins plăcut față de celelalte aplicații similare pe care le-am utilizat pentru monitorizarea a sute de dosare pe care le gestionez, deoarece cu notificările în timp real pot vedea orice modificare apărută în cadrul dosarelor urmărite.',
    author: 'Oana Mares',
    role: 'Avocat',
    rating: 5,
  },
  {
    id: 2,
    text: 'Caselib mi-a simplificat enorm munca zilnică. Interfața intuitivă și notificările în timp real mă ajută să fiu mereu la curent cu toate dosarele mele. Este exact ceea ce aveam nevoie pentru a-mi organiza mai bine practica.',
    author: 'Alexandru Popescu',
    role: 'Avocat',
    rating: 5,
  },
  {
    id: 3,
    text: 'De când folosesc Caselib, nu am mai ratat niciun termen important. Sistemul de alerte este foarte eficient și mă ajută să îmi planific mult mai bine timpul. O aplicație indispensabilă pentru orice avocat.',
    author: 'Maria Ionescu',
    role: 'Avocat',
    rating: 5,
  },
]

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const currentTestimonial = testimonials[currentSlide]

  return (
    <div className="relative h-auto flex-1 flex items-center justify-center p-12 m-4 rounded-2xl bg-gradient-to-b from-blue-800 to-slate-900">
      <div className="max-w-lg text-white h-full flex">
        <div className="text-center m-auto">
          {/* Star Rating */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-lg leading-relaxed mb-8 font-light">
            "{currentTestimonial.text}"
          </blockquote>

          {/* Author */}
          <div className="mb-8">
            <div className="font-semibold text-xl">{currentTestimonial.author}</div>
            <div className="text-blue-200 text-sm">{currentTestimonial.role}</div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-2xl cursor-pointer transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-blue-200 absolute bottom-3 w-11/12">
        <div className="flex items-center justify-between">
          <div>© 2025 Caselib.ro. Toate drepturile rezervate.</div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            office@caselib.ro
          </div>
        </div>
      </div>
    </div>
  )
}
