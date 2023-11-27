import * as Icons from 'metal-icons/16/outline'

export default function IconsSmallOutline() {
  const IconComponents = Object.values(Icons)
  return (
    <>
      {IconComponents.map((Icon, index) => (
        <Icon key={index} />
      ))}
    </>
  )
}
