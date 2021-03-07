

export default function Holidays({display}) {
  const holidayContent = display ?
    <>
      <h4>Upcoming Holiday Closures</h4>
      <p>Thanksgiving Day Thurs 11/26</p>
      <p>Christmas Eve and Day Thurs 12/24- Sun 12/27</p>
      <p>New Years Eve and Day Thurs 12/31- Sun 1/3 </p>
    </> :
    null;

  return (
    <holidays>
      <div className="holidays">
        {holidayContent}
      </div>
    </holidays>
  )
}
