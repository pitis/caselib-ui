import { defineStepper } from '@/components/ui/stepper'
import StepTwo from './steps/Step2'
import StepThree from './steps/Step3'
import StepFour from './steps/Step4'

const { Stepper } = defineStepper(
  {
    id: 'step-1',
    title: 'Detalii cont',
  },
  {
    id: 'step-2',
    title: 'Confirmare Email',
  },
  {
    id: 'step-3',
    title: 'Selectare abonament',
  },
  {
    id: 'step-4',
    title: 'Finalizare cont',
  },
)

const Content: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <Stepper.Panel className="content-center">{children}</Stepper.Panel>
}

export default function SignupStepper() {
  return (
    <Stepper.Provider className="space-y-24" variant="horizontal" initialStep="step-2">
      {({ methods }) => (
        <>
          <Stepper.Navigation className="max-w-2xl mx-auto">
            {methods.all.map((step) => (
              <Stepper.Step key={step.id} of={step.id} onClick={() => methods.goTo(step.id)}>
                <Stepper.Title>{step.title}</Stepper.Title>
              </Stepper.Step>
            ))}
          </Stepper.Navigation>
          {methods.switch({
            'step-2': () => (
              <Content>
                <StepTwo />
              </Content>
            ),
            'step-3': () => (
              <Content>
                <StepThree />
              </Content>
            ),
            'step-4': () => (
              <Content>
                <StepFour />
              </Content>
            ),
          })}
        </>
      )}
    </Stepper.Provider>
  )
}
