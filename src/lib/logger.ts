
interface Props {
  trace: any
  label: string
  payload?: any
}

export const logger: (values: Props) => void = console.log
