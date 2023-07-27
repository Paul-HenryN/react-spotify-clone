import { Outlet } from "react-router-dom";
import { routes } from "../shared/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faBookOpen,
  faGlobe,
  faHome,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import SectionContainer from "../components/SectionContainer";

export default function Root() {
  return (
    <div className="h-screen grid overflow-hidden grid-cols-[min_content_auto] gap-2 p-2 bg-black">
      <aside className="flex flex-col gap-2 overflow-auto resize-x min-w-[15rem] max-w-[26rem]">
        <SectionContainer>
          <a href={routes.HOME}>
            <FontAwesomeIcon icon={faHome} />
            Home
          </a>

          <a href={routes.HOME}>
            <FontAwesomeIcon icon={faSearch} />
            Search
          </a>
        </SectionContainer>

        <SectionContainer>
          <div>
            <button title="Collapse your library">
              <FontAwesomeIcon icon={faBookOpen} />
              Your library
            </button>

            <button title="Create playlist or folder">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

          <div>
            <div className="bg-neutral-700">
              <p>Create your first playlist</p>
              <p>It&apos;s easy, we will help you</p>
              <button>Create playlist</button>
            </div>

            <div className="bg-neutral-700">
              <p>Let&apos;s find some podcasts to follow</p>
              <p>We&apos;ll keep you updated on new episodes</p>
              <button>Create playlist</button>
            </div>
          </div>

          <div>
            <ul>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Privacy Center</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
              <li>
                <a href="#">About Ads</a>
              </li>
              <li>
                <a href="#">Accessibilty</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
            </ul>

            <button>
              <FontAwesomeIcon icon={faGlobe} />
              English
            </button>
          </div>
        </SectionContainer>
      </aside>

      <SectionContainer className="overflow-scroll relative bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-900">
        <header className="fixed bg-neutral-90">
          <nav>
            <div>
              <button title="Go back">
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
              <button title="Go forward">
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>

            <ul role="menu">
              <li>
                <a href="#">Sign up</a>
                <a href={routes.LOGIN}>Log in</a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="mt-16">
          <h1>Main</h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            id optio consequatur amet quibusdam velit distinctio? Alias iste
            veritatis, inventore itaque beatae ducimus vitae ut, sit nam
            ratione, odit minima! Veniam, similique unde? Odit delectus vel,
            harum aliquam mollitia inventore eaque, assumenda adipisci ab
            eligendi voluptatum dolorem modi vero, maiores animi. Veniam ex,
            corporis a minima veritatis similique facere ut! Eligendi hic alias
            temporibus molestiae itaque autem voluptatem distinctio. Doloribus,
            incidunt assumenda impedit soluta, nobis sequi quaerat
            necessitatibus dolore magnam dolor labore vitae aliquid eos, tempore
            repellat. Facere, suscipit dolorum. Impedit delectus architecto non
            et nesciunt ullam quaerat, vitae debitis perspiciatis magni
            repudiandae eos? Ipsum facilis architecto amet odio facere
            blanditiis, libero officiis labore aliquam rerum, cum ea sapiente
            eius! Quisquam a totam doloribus modi rem? Harum doloremque atque
            perspiciatis nobis ab et a totam dolorem, blanditiis beatae corporis
            nisi maiores assumenda natus, nostrum enim debitis recusandae itaque
            ut non. Dolorum maiores similique ab illum quas recusandae
            perferendis aliquam. Necessitatibus ducimus recusandae quo quam ea.
            Dolore earum maxime sed similique. Consequuntur explicabo quod ipsam
            quaerat possimus veritatis rem maxime accusantium. Maiores
            necessitatibus temporibus doloremque. Provident suscipit velit
            doloribus enim nesciunt animi recusandae sequi amet? Sapiente error
            a quae molestias maxime minima quis veniam ea labore ratione
            obcaecati, incidunt pariatur sunt. Ab recusandae sit inventore non
            voluptatum, omnis minus sed nam totam laborum et, labore quod hic
            consequatur dolore, optio expedita tempora saepe ipsum voluptatem
            obcaecati molestias vitae perspiciatis iure! Nostrum. Ipsa, rem,
            magni atque sed dolore dolor pariatur omnis dolorem, harum sint
            tempore magnam. Consectetur, necessitatibus veniam, error, et porro
            atque soluta consequatur beatae quasi perspiciatis ut eos ad libero?
            Maiores explicabo excepturi laboriosam, dolore quaerat alias
            similique dicta laudantium quisquam molestias illo aliquid
            temporibus repudiandae repellendus omnis aut velit impedit est
            voluptate iusto odit. Quas maiores consequuntur obcaecati saepe.
            Dolore autem nemo libero soluta beatae laudantium velit. Natus
            quisquam placeat animi consequatur autem possimus praesentium, ipsam
            voluptate at. Nemo expedita similique cumque autem temporibus.
            Accusantium, amet atque! Expedita, voluptatum. Ratione recusandae a
            neque asperiores numquam odio, ab tenetur maxime modi non. Quis
            consectetur dolor distinctio labore sunt qui maxime harum soluta?
            Eligendi, modi ducimus voluptatibus corrupti alias quo adipisci?
            Quis labore quidem illo reprehenderit vel incidunt cum ab aliquam.
            Ab omnis, quam totam, beatae aliquam obcaecati enim ullam nulla, id
            in eos. Voluptates, nostrum magnam vitae deserunt itaque veniam.
            Accusantium soluta dolorum doloribus quasi modi, et fugit ex atque
            itaque doloremque sunt eaque minima. Ducimus, sint accusamus
            corrupti enim fuga voluptatibus esse at modi obcaecati autem,
            dolores distinctio deleniti. Laborum ipsam harum modi neque
            laboriosam ipsa voluptatibus expedita architecto deserunt velit eos
            incidunt quasi repellendus dicta rem porro aspernatur pariatur
            soluta, et quos quaerat est? Molestias, unde. Fugit, consectetur.
            Natus unde alias velit, voluptates possimus repellendus porro rem
            temporibus nam quibusdam recusandae corporis distinctio vero tenetur
            beatae ab culpa optio labore molestias et illum facilis quod
            architecto! Nam, perspiciatis. Quibusdam laboriosam eos, expedita
            numquam voluptates aut consequatur dignissimos? Animi architecto
            eveniet totam eligendi officia dignissimos aliquam illum odit
            numquam aut, ad explicabo rerum atque ducimus rem blanditiis
            praesentium! Similique. Sit beatae corporis similique dolorum atque!
            Assumenda beatae sint, quos sunt distinctio, culpa rem neque
            suscipit ratione itaque iure libero molestiae cum fugiat? Odit
            officia, neque inventore officiis saepe laboriosam. Natus debitis
            voluptate quod nostrum. Excepturi esse laudantium nam facere rem
            sequi et similique consequuntur itaque modi aut quam, mollitia culpa
            labore tempora reiciendis, fugiat, aliquam eaque placeat. Itaque,
            amet? Iusto placeat a, eveniet tempore reprehenderit accusantium
            ullam aliquid unde maxime doloribus quos error odio inventore,
            beatae perspiciatis adipisci voluptatum, nemo id. Nulla, excepturi
            voluptate quis sequi modi velit culpa?
          </p>
          <Outlet />
        </main>
      </SectionContainer>

      <aside className="col-span-2 flex justify-between items-center bg-gradient-to-r from-accent-1 to-accent-2 px-4 py-3">
        <p>
          <span className="block text-sm tracking-wider">
            PREVIEW OF SPOTIFY
          </span>
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>

        <a href="#">Signup for free</a>
      </aside>
    </div>
  );
}
