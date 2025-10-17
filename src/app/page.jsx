export default function Home() {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-6 md:px-20 lg:px-32 text-center"
      style={{ backgroundImage: "url('/Jey.jpg')" }}
    >
      <div className="bg-black/25 backdrop-blur-[1px] rounded-3xl p-8 md:p-12 shadow-[0_0_30px_rgba(0,0,0,0.4)] max-w-5xl">
        <h1 className="text-white font-averia font-bold text-4xl md:text-6xl mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
          ¡Feliz cumpleaños, Jeremih!
        </h1>

        <h2 className="text-white font-averia font-bold text-2xl md:text-4xl lg:text-5xl leading-tight mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
          Queremos hacer una tarde de picnic para celebrar la vida de Jeremih y estás
          más que invitado. La idea es pasar un día agradable al aire libre.
        </h2>

        <p className="text-white font-averia font-semibold md:text-2xl mb-6 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
          Si no hace buen tiempo, optaremos por una opción más simple, a la que no podremos incluir a todos.
          Avisaremos esa misma semana si hay algún cambio.
        </p>

        <p className="text-white font-averia font-bold md:text-2xl mb-4 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
          Fecha: Sábado 25 de octubre <br></br>
          Hora: 15:00
        </p>

        <p className="text-white font-averia font-bold md:text-2xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
          Lugar: Parque de El Rinconín, cerca del parque de arena{" "}
          <a
            href="https://www.google.com/search?sca_esv=0ee965d81246b17d&rlz=1C5CHFA_enES1158ES1158&sxsrf=AE3TifMLi0n_kg1EFjbeevzsJXPqdl2Azg:1760686545940&q=Parque+de+El+Rincon%C3%ADn&si=AMgyJEs9DArPE9xmb5yVYVjpG4jqWDEKSIpCRSjmm88XZWnGNf1ffDuGrJMu86qiF9PFqnRzBlS8f02tDZTExwV5oyjEMRbGHbPifg3MVFdnsmpkzFALoBs_NOhqxR3qB48PJ1t5O_H7&sa=X&ved=2ahUKEwiGxIbB3KqQAxWhVKQEHf4kPWIQ_coHegQIMRAB"
            target="_blank"
            className="underline hover:text-gray-300 transition-colors duration-300"
          >
            (¡Pincha aquí!)
          </a>
        </p>
      </div>
    </section>
  );
}
