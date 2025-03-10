export type Event = {
  id: number
  title: string
  date: string
  location: string
  description: string
  category: 'Religious' | 'Social' | 'Charity'
}

export type EventFormData = Omit<Event, 'id'> 