import * as Icons from 'metal-icons/24/outline'

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
