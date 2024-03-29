import { ReactElement } from "react";
import { IoIosNotifications } from "react-icons/io";

import { Root } from "./Notifications.styles";

const Notifications = (): ReactElement => (
    <Root>
        <IoIosNotifications size={20} />
    </Root>
);

export { Notifications };
