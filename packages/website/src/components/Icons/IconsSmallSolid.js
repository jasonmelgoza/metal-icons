import * as Icons from 'metal-icons/16/solid'

export default function IconsSmallSolid() {
  const IconComponents = Object.values(Icons)
  return (
    <>
      {IconComponents.map((Icon, index) => (
        <Icon key={index} />
      ))}
    </>
  )
}
