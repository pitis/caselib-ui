import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Calendar, Info, Scale, Users } from 'lucide-react'
import InfoSection from './tabs/InfoSection'
import NotiteTab from './tabs/NotiteTab'

const caseDetailsData = [
  {
    icon: Info,
    title: 'Detalii dosar',
    rows: [
      { label: 'Nume instanta:', value: 'Curtea de Apel BUCURESTI' },
      { label: 'Data inregistrarii:', value: '2024-05-04 / 18:00:24' },
      { label: 'Data ultimei modificari:', value: '2024-05-04 / 18:32:21' },
      { label: 'Sectie:', value: 'Sectia a-IV-a Civila' },
      { label: 'Materie:', value: 'Civil' },
      { label: 'Obiectii:', value: 'Pretentii' },
      { label: 'Stadiu procesual:', value: 'Fond' },
      {
        label: 'Etichete:',
        value: (
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            MARIUS
          </Badge>
        ),
      },
    ],
  },
  {
    icon: Users,
    title: 'Parti',
    rows: [
      { label: 'Reclamant:', value: 'Federatia Romana de Tenis prin SCA TUCA ZBARCEA & ASOCIATII' },
      { label: 'Parat:', value: 'Ministerul Sportului' },
    ],
  },
  {
    icon: Scale,
    title: 'Cai de atac',
    rows: [
      { label: 'Data declarare:', value: '2024-05-04 / 12:32:20' },
      { label: 'Parte declaranta:', value: 'Ministerul Sportului' },
      { label: 'Cale de atac:', value: 'Apel' },
    ],
  },
  {
    icon: Calendar,
    title: 'Ultima sedinta',
    rows: [
      { label: 'Data:', value: '05-04-2024' },
      { label: 'Ora estimata:', value: '12:32' },
      { label: 'Complet:', value: 'Cp3' },
      { label: 'Data ultimei modificari:', value: '2024-05-04 / 12:32:20' },
      {
        label: 'Solutia pe scurt:',
        value:
          'In baza art. 107 C.pen., art. 110 C.pen., respinge ca neintemeiate propunerea Parchetului de pe langa Tribunalul Galati formulata in cadrul dosarului penal nr. 1615/P/2021, de internare medicala a inculpatului Iovita Manuela si Iovita Casandra. In baza art. 272 C.proc.pen. onoreaza aparatorului desemnat din oficiu pentru intiimate, in suma de 780 lei, se avansează din fondurile Ministerului Justitiei catre Baroul Galati. In baza art.275 alin. 3 C.proc.pen., cheltuielile judiciare avansate de stat raman in sarcina acestuia. Cu drept de contestatie in termen de 3 zile de la pronuntare. Pronuntata azi, 25.01.2023, prin punerea hotararii la dispozitie prin mijlocirea grefei instantei.',
      },
    ],
  },
]

export default function DosareTabs() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue="informatii" className="w-full min-w-5xl">
        <TabsList className="bg-background">
          <TabsTrigger value="informatii">Informatii generale</TabsTrigger>
          <TabsTrigger value="istoric">Istoric Procedural</TabsTrigger>
          <TabsTrigger value="notite">
            Notite{' '}
            <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
              NOU
            </Badge>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="informatii">
          <div className="flex flex-col gap-6">
            {caseDetailsData.map((section, index) => (
              <InfoSection
                key={index}
                icon={section.icon}
                title={section.title}
                rows={section.rows}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="notite">
          <NotiteTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}
