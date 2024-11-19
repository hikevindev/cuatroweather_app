import { useTranslation } from "react-i18next"

const Dashboard = () => {
    const { t } = useTranslation()

    return (
        <div>
            Dashboard, {t('welcome')} , kevin
        </div>
    )
}

export default Dashboard