import { LoadingIcon } from "../../shared/components/Icons";
import { PageLayout } from "../PageLayout/PageLayout";

export function Loader() {
    return (
        <PageLayout>
            <div>
                <LoadingIcon color="rgb(5, 91, 5)" />
            </div>
        </PageLayout>
    );
}