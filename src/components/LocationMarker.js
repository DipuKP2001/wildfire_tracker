import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const LocationMarker = ({ lat,lng,onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon className="location-icon" icon={locationIcon} />
        </div>
    )
}

export default LocationMarker