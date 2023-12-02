import * as Icons from 'metal-icons/24/solid'

export default function IconsLargeSolid() {
  const IconComponents = Object.values(Icons)
  return (
    <>
      {IconComponents.map((Icon, index) => (
        <Icon key={index} />
      ))}
    </>
  )
}
