import loader from '../../assets/img/loader.svg'
export default function FullScreenLoader() {
  return (
    <div className="ProcessingDiv">
      <div className="center-screen">
        <img className="loader-size" src={loader} />
      </div>
    </div>
  )
}
