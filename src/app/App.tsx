export default function App() {
	return (
		<main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-12">
			<article className="max-w-3xl space-y-8">
				{/* Header */}
				<header className="space-y-2">
					<h1 className="text-4xl md:text-5xl tracking-tight">
						🚨 GUARAPIRANGA NEWS 📢
					</h1>
					<hr className="h-px bg-foreground/10 w-24 border-0" />
				</header>

				{/* Content */}
				<div className="space-y-10 text-lg md:text-xl leading-relaxed text-foreground/90">
					<section>
						<h2 className="sr-only">Regras do Grupo</h2>{" "}
						<ul className="space-y-6">
							<li>
								🟢 Lembre-se: você está em um grupo público e é responsável
								pelos seus atos.
							</li>

							<li>
								🟢 O foco do grupo é notícias, principalmente sobre trânsito e
								ocorrências da região. Resenhas são permitidas com moderação,
								sem teor de política, religião ou futebol.
							</li>

							<li>
								🟢 Mensagens sobre empregos, doações, achados e perdidos são
								permitidas. (com moderação; detalhes devem ser tratados no
								privado entre os interessados e quem postou)
							</li>

							<li>
								🟡 <strong>Atenção:</strong> Ao perguntar ou indicar prestação
								de serviço, compra ou venda: Quem for indicar pessoa ou empresa
								deve enviar apenas o número de contato. Não é permitido enviar
								arte de banner digital. Caso envie, será apagado por algum ADM.
							</li>

							<li>
								🟡 Vendas liberadas aos sábados, domingos e feriados, das 10h às
								22h. Permitido apenas 1 foto e 1 texto por anúncio. Obs: máximo
								de 3 anúncios por dia, por membro. 🚫 Proibida divulgação de
								serviços de acompanhantes (GP).
							</li>

							<li>
								🟡 Às vezes o grupo fecha entre 23h e reabre no dia seguinte
								cedo. Também poderá ser fechado caso algum ADM julgue
								necessário, pelo tempo que precisar.
							</li>

							<li>
								🟡 <strong>Cuidado com cenas fortes:</strong> Imagens sobre
								crimes, atentados ou conteúdos explícitos devem ser autorizadas
								por um ADM antes do envio.
							</li>

							<li>
								🟡 <strong>Cuidado com comentários:</strong> Se alguém se sentir
								ofendido, orientamos tirar um print e enviar para algum ADM para
								análise.
							</li>

							<li>
								🔴 Proibido expor pessoas ou estabelecimentos sem provas (vídeo
								do ato).
							</li>

							<li>
								🔴 Proibido avisar sobre blitz. É crime inafiançável no Brasil,
								previsto no artigo 265 do Código Penal Brasileiro. Exclusão
								imediata do grupo.
							</li>

							<li>
								🔴 Proibido chamar no privado sem autorização. Se houver
								denúncia ao ADM, exclusão imediata.
							</li>

							<li>
								🔴 Proibida a exposição de pessoas vítimas de:
								<ul className="list-disc pl-8 mt-2 space-y-1">
									<li>Acidentes</li>
									<li>Placas de veículos</li>
								</ul>
							</li>

							<li>
								🔴 Proibidas brigas e discussões sobre:
								<ul className="list-disc pl-8 mt-2 space-y-1">
									<li>Religião</li>
									<li>Sexualidade</li>
									<li>Política</li>
									<li>Futebol</li>
								</ul>
							</li>

							<li>
								🔴 Proibidos anúncios de golpes, empréstimos, nota falsa, entre
								outros. Remoção imediata.
							</li>

							<li>
								🔴 Proibido divulgar links de:
								<ul className="list-disc pl-8 mt-2 space-y-1">
									<li>Outros grupos</li>
									<li>Apps para ganhar dinheiro</li>
								</ul>
							</li>
						</ul>
						<p className="mt-6 font-medium">
							Os únicos links permitidos são de notícias. Caso contrário, o
							conteúdo será removido.
						</p>
						<div className="mt-8">
							<a
								href="https://chat.whatsapp.com/Fy4whBt494z2igOtFDrGnT?mode=gi_t"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-lg transition-colors duration-200"
							>
								<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
									<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
								</svg>
								Entrar no Grupo Oficial
							</a>
						</div>
					</section>

					<section className="space-y-6">
						<h2 className="sr-only">Nosso Propósito</h2>
						<p>
							Aqui, cada pessoa importa.
							<br />
							Cada voz tem espaço.
							<br />
							Cada ideia pode florescer.
						</p>

						<p>
							Trabalhamos juntos para transformar nossa região.
							<br />
							Para criar oportunidades onde antes havia apenas passagem.
							<br />
							Para fazer da Guarapiranga não apenas uma avenida, mas um lar.
						</p>

						<p>
							Acreditamos no poder da colaboração.
							<br />
							Na força do coletivo.
							<br />
							No futuro que construímos, lado a lado.
						</p>

						<p className="pt-4 text-base text-foreground/60 italic">
							Junte-se a nós. A Guarapiranga é nossa casa.
						</p>
					</section>
				</div>

				<footer className="pt-8 border-t border-foreground/10">
					<p className="text-sm text-foreground/50">
						Avenida Guarapiranga · São Paulo · {new Date().getFullYear()}
					</p>
				</footer>
			</article>
		</main>
	);
}
