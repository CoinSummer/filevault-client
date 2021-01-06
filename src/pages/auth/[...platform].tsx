import { useRouter } from 'next/router'
import BaseLayout from '../../layouts/BaseLayout'

const SettingsPage = () => {
  const router = useRouter()
  console.log(router.query);

  return (
    <BaseLayout>
      Callback
    </BaseLayout>
  )
}

export default SettingsPage
