const Session = ({ params }: { params: {
  phone: string
} }) => {
  return (
    <div>{params.phone}</div>
  )
}

export default Session
