'use client';

export function TestCard({ data, error, isLoading }: { data: any; error: any; isLoading: boolean }) {
	if (isLoading)
		return (
			<div className="rounded-lg border-gray-700 border-2">
				<h2>Aujourd&apos;hui</h2>
				<h3>Chargement...</h3>
			</div>
		);
	if (error)
		return (
			<div className="rounded-lg border-gray-700 border-2">
				<h2>Aujourd&apos;hui</h2>
				<h3>Une erreur est survenue, merci d&apos;essayer dans quelques minutes</h3>
			</div>
		);
	if (data.status == 404)
		return (
			<div className="rounded-lg border-gray-700 border-2">
				<h2>{"Aujourd'hui " + new Date().toLocaleDateString()}</h2>
				<h3>Pas de test prévu pour aujourd&apos;hui</h3>
			</div>
		);

	return (
		<div className="rounded-lg border-gray-700 border-2">
			<h2>{"Aujourd'hui " + new Date(data.testOn).toLocaleDateString()}</h2>
			<h3>{data.testOf.firstName + ' ' + data.testOf.lastName}</h3>
		</div>
	);
}
