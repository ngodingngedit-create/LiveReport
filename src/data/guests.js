import { reactive } from 'vue'

const venues = ['Pestapora', 'Ngamen 0.5', 'Prambanan Jazz']
const medias = ['Kompas', 'Detikcom', 'Tribun News', 'CNN Indonesia', 'Tempo', 'Liputan6', 'IDN Times', 'Kumparan', 'Suara Merdeka', 'Pikiran Rakyat']
const cats = ['Regular Pass', 'Regular Pass', 'Regular Pass', 'VIP Pass', 'VIP Pass', 'Presale 2', 'Presale 2', 'Early Bird', 'Regular Pass', 'VIP Pass']
const first = ['Eja', 'Lilien', 'Shafira', 'Ola', 'Idris', 'Nadia', 'Rizky', 'Dewi', 'Bagas', 'Intan', 'Fajar', 'Sinta', 'Dimas', 'Ayu', 'Yoga', 'Putri', 'Hendra', 'Novi', 'Agus', 'Rina', 'Tono', 'Lina', 'Eko', 'Fitri', 'Andi', 'Maya', 'Bima', 'Dian', 'Galih', 'Ratna', 'Bayu', 'Citra', 'Doni', 'Eka', 'Farhan', 'Gita', 'Hadi', 'Irma', 'Joko', 'Kirana']
const last = ['Kurniawan', 'Berliana', 'Saputra', 'Pratama', 'Lestari', 'Aditya', 'Permata', 'Nugroho', 'Maharani', 'Wulandari', 'Firmansyah', 'Anjani', 'Gunawan', 'Rahmawati', 'Setiawan', 'Marlina', 'Prasetyo', 'Wijaya', 'Handayani', 'Kurnia', 'Anggraini', 'Sakti', 'Puspita', 'Ramadhan', 'Sari', 'Santoso', 'Hidayat', 'Kusuma', 'Rahman', 'Siregar', 'Halim', 'Pangestu', 'Wibowo', 'Seto', 'Utami', 'Pramudya', 'Laksmana', 'Waskita', 'Nugraha', 'Puspita']

const seed = [
  { name: 'Eja Kurniawan', email: 'ejakurniawan9@gmail.com', phone: '0812-3456-7891', id: '#20791', cat: 'Regular Pass', seat: '-', date: '16 Agu 2026', time: '19:54:19', status: 'Checked-In' },
  { name: 'Lilien Berliana', email: 'berlianalilien@gmail.com', phone: '0813-2201-4455', id: '#20792', cat: 'VIP Pass', seat: 'A-12', date: '16 Agu 2026', time: '18:51:10', status: 'Checked-In' },
  { name: 'Shafira', email: 'eileena.fira@gmail.com', phone: '0821-7788-9901', id: '#20794', cat: 'Presale 2', seat: 'B-04', date: '16 Agu 2026', time: '17:06:15', status: 'Checked-In' },
  { name: 'Ola', email: 'olarhndyn14@gmail.com', phone: '0857-6634-2210', id: '#20796', cat: 'Regular Pass', seat: '-', date: '16 Agu 2026', time: '19:28:54', status: 'Checked-In' },
  { name: 'Idris Muhammad', email: 'idrisrasyid008@gmail.com', phone: '0815-9012-3345', id: '#20797', cat: 'VIP Pass', seat: 'VIP-01', date: '16 Agu 2026', time: '19:01:15', status: 'Checked-In' },
  { name: 'Nadia Safitri', email: 'nadiasftr@gmail.com', phone: '0822-5567-8812', id: '#20799', cat: 'Early Bird', seat: '-', date: '16 Agu 2026', time: '19:15:22', status: 'Checked-In' },
]

function pad(n, l = 2) { return String(n).padStart(l, '0') }

const rows = seed.map((g, i) => ({ media: medias[i % medias.length], ...g, venue: venues[i % venues.length] }))
for (let i = rows.length; i < 1000; i++) {
  const fn = first[i % first.length]
  const ln = last[(i * 7) % last.length]
  const name = `${fn} ${ln}`
  const cat = cats[i % cats.length]
  const venue = venues[i % venues.length]
  const checked = i % 10 < 7
  const hh = 17 + (i % 3)
  const mm = pad((i * 13) % 60)
  const ss = pad((i * 29) % 60)
  const seat = cat === 'VIP Pass' ? `A-${pad((i % 30) + 1)}` : cat === 'Presale 2' ? `B-${pad((i % 40) + 1)}` : '-'
  rows.push({
    name,
    media: medias[i % medias.length],
    email: `${fn.toLowerCase()}.${ln.toLowerCase()}${i}@gmail.com`,
    phone: `08${12 + (i % 78)}-${pad(1000 + ((i * 37) % 9000), 4)}-${pad(1000 + ((i * 53) % 9000), 4)}`,
    id: `#${20791 + i}`,
    cat,
    seat,
    date: '16 Agu 2026',
    time: checked ? `${pad(hh)}:${mm}:${ss}` : '-',
    status: checked ? 'Checked-In' : 'Belum Check-in',
    venue,
  })
}

export default reactive(rows)
