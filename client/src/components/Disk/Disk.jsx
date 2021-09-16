import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchFiles } from '../../utils/file'
function Disk() {
    const dispatch = useDispatch()
    const dirId = useSelector((state) => state.files.currentDir)


    useEffect(() => {
        dispatch(fetchFiles(dirId))
    }, [dirId])
    return (<section className="disk-section">
        DISK
    </section>);
}

export default Disk;