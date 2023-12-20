import { TabsContent, TabsList, TabsTrigger, Tabs as TabsShad } from '@/components/ui/tabs';
import { Simulation } from './Simulation';
import { Accounts } from './Accounts';

export function Tabs() {
	return (
		<TabsShad defaultValue="simulation" className="w-[400px]">
			<TabsList>
				<TabsTrigger value="simulation">Simulation</TabsTrigger>
				<TabsTrigger value="accounts">Comptes</TabsTrigger>
				{/* <TabsTrigger value="exercices">Exercices</TabsTrigger> */}
				<TabsTrigger value="statistics">Statistiques</TabsTrigger>
			</TabsList>
			<TabsContent value="simulation">
				<Simulation />
			</TabsContent>
			<TabsContent value="accounts">
				<Accounts />
			</TabsContent>
		</TabsShad>
	);
}
