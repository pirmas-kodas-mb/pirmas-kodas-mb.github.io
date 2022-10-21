import Link from "next/link"

const Tag = ({ tag }) => {
  return (
    <Link
      href={`topics/${tag}`}
      className="m-1 text-sm  px-1 py-1 rounded-full bg-gray-200 dark:bg-gray-900"
    >
      {tag}
    </Link>
  )
}
const CourseCard = ({ course }) => {
  const {
    id,
    name,
    price,
    hours,
    link,
    tags,
    startDate,
    endDate,
    days,
    intensity,
    type,
    description,
    descriptionExtra,
    active,
    groupSize,
  } = course
  const tagList = (
    <p>
      Tags:
      {tags.map((tag) => (
        <Tag tag={tag} key={tag}></Tag>
      ))}
    </p>
  )
  return (
    <div className="shadow rounded-xl hover:shadow-lg flex max-w-sm min-w-full flex-col py-4 px-8 bg-white dark:bg-gray-800 dark:shadow-none">
      <h1 id={id}>{name}</h1>
      <div className="py-2">{description}</div>
      {descriptionExtra && <div className="py-2">{descriptionExtra}</div>}
      {/* {tagList} */}
      <div>Trukmė: {hours} valandų</div>
      <div>
        Kaina: €{price} (€{price / hours}/val.)
      </div>

      {active && (
        <>
          <div>Tipas: {type}</div>
          <br />
          <div>Dienos: {days}</div>

          <div>
            Grupės dydis: {groupSize[0]}-{groupSize[1]}
          </div>
          <div>Pradžia: {startDate}</div>
          <div>Pabaiga: {endDate}</div>
          <div>Intensyvumas: {intensity} val./sav.</div>
        </>
      )}

      {active ? (
        <Link
          className={`self-end font-bold text-lg p-3 rounded-md transition-colors transition-border duration-1000 dark:text-black bg-mustard dark:bg-green-500`}
          // bg-gradient-to-br from-white via-white to-gray-50
          href={`courses/${link}`}
          passHref
        >
          Detaliau
        </Link>
      ) : (
        <a
          className={`self-end font-bold text-lg p-3 rounded-md transition-colors transition-border duration-1000 dark:text-black bg-mustard dark:bg-green-500`}
          // bg-gradient-to-br from-white via-white to-gray-50
          href={`https://forms.gle/bomRiK5PwdxGufRYA`}
          rel="noopener noreferrer"
          target="_blank"
          passHref
        >
          Teirautis
        </a>
      )}
      {/* <div>{hours / price}</div> */}
    </div>
  )
}

export default CourseCard
