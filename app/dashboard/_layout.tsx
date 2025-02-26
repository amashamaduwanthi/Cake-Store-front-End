import {Drawer} from "expo-router/drawer";

export default function Dashboard() {
    return (
        <Drawer>
            <Drawer.Screen name="dashboard" options={{title : "Dashboard"}}/>
            <Drawer.Screen name="CakeDetails" options={{title : "Cakes"}}/>
        </Drawer>
    );
}