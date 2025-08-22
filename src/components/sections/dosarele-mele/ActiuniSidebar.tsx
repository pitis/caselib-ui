'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Edit, Plus, Trash2 } from 'lucide-react'
import { useState } from 'react'

const labels = [
  { name: 'MARIUS', color: 'bg-blue-500', count: 20, selected: true },
  { name: 'VALERIU', color: 'bg-purple-500', count: 14, selected: false },
  { name: 'PRO BO.', color: 'bg-red-500', count: 10, selected: false },
  { name: 'ALTA ET.', color: 'bg-pink-500', count: 8, selected: false },
  { name: 'ETICH', color: 'bg-yellow-500', count: 5, selected: false },
]

export default function ActiuniSidebar() {
  const [notifications, setNotifications] = useState(false)
  const [calendar, setCalendar] = useState(true)
  const [selectedLabels, setSelectedLabels] = useState(labels)

  return (
    <div className="w-80 bg-white rounded-lg border border-gray-200 p-6 space-y-6">
      {/* Header */}
      <h3 className="text-lg font-semibold text-gray-900">Actiuni dosar</h3>

      {/* Settings Section */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-gray-700">Setari urmarire dosar</h4>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Notificari</span>
          <Switch checked={notifications} onCheckedChange={setNotifications} />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Calendar</span>
          <Switch checked={calendar} onCheckedChange={setCalendar} />
        </div>
      </div>

      {/* Main Label Section */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700">Eticheta principala</h4>
        <Select defaultValue="">
          <SelectTrigger>
            <SelectValue placeholder="Selecteaza o eticheta" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="marius">MARIUS</SelectItem>
            <SelectItem value="valeriu">VALERIU</SelectItem>
            <SelectItem value="probo">PRO BO.</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Labels Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-gray-700">Selecteaza etichete</h4>
          <span className="text-xs text-gray-500">1/7</span>
        </div>

        <div className="space-y-2">
          {selectedLabels.map((label, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 rounded-lg border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={label.selected}
                    onChange={() => {
                      const updated = [...selectedLabels]
                      updated[index].selected = !updated[index].selected
                      setSelectedLabels(updated)
                    }}
                    className="rounded border-gray-300"
                  />
                  <Badge variant="secondary" className={`${label.color} text-white text-xs`}>
                    {label.name}
                  </Badge>
                </div>
                <span className="text-xs text-gray-500">({label.count} dosare)</span>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Edit className="h-3 w-3" />
                </Button>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-red-500">
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Button variant="ghost" className="w-full justify-start text-gray-600">
          <Plus className="h-4 w-4 mr-2" />
          Adauga eticheta
        </Button>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-4 border-t border-gray-100">
        <Button variant="destructive" className="w-full">
          Opreste urmarirea
        </Button>
        <Button variant="outline" className="w-full bg-transparent">
          Adauga notita
        </Button>
      </div>
    </div>
  )
}
