import { helpers } from "faker";

export const generateSampleText = () => {
    const user = helpers.userCard();
    const content = `${user.name}, ${user.address.street}, ${user.address.suite}. ${user.address.city}, ${user.address.zipcode}. ${user.address.geo.lat}/${user.address.geo.lng}.`;
    return content;
};
