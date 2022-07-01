import { Component, createSignal, Match, Show, Switch } from "solid-js";
import Button from "./components/Button";

const App: Component = () => {
  const [openTransportation, setOpenTransportation] = createSignal(false);
  const [openCity, setOpenCity] = createSignal(false);
  const [openAccomodationBerlin, setOpenopenAccomodationBerlin] =
    createSignal(false);
  const [openAccomodationBadEms, setOpenopenAccomodationBadEms] =
    createSignal(false);
  const [openAdventureOrChill, setOpenAdventureOrChill] = createSignal(false);
  const [openAdventure, setOpenAdventure] = createSignal(false);
  const [openChill, setOpenChill] = createSignal(false);
  const [openAdventureAndChill, setOpenAdventureAndChill] = createSignal(false);

  const [chooseCar, setChooseCar] = createSignal(true);
  const [chooseTrain, setChooseTrain] = createSignal(true);
  const [chooseBerlin, setChooseBerlin] = createSignal(true);
  const [chooseBadEms, setChooseBadEms] = createSignal(true);
  const [chooseHotel, setChooseHotel] = createSignal(true);
  const [chooseAirBnB, setChooseAirBnB] = createSignal(true);
  const [chooseSkydiving, setChooseSkydiving] = createSignal(true);
  const [chooseBungee, setChooseBungee] = createSignal(true);
  const [showOr, setShowOr] = createSignal(true);

  const closeAll = () => {
    if (openTransportation() === false) {
      setOpenTransportation(true);
    } else {
      setChooseCar(true);
      setChooseTrain(true);
      setOpenTransportation(false);
      setChooseBerlin(true);
      setChooseBadEms(true);
      setOpenCity(false);
      setChooseHotel(true);
      setChooseAirBnB(true);
      setOpenopenAccomodationBadEms(false);
      setOpenopenAccomodationBerlin(false);
      setChooseSkydiving(true);
      setChooseBungee(true);
      setShowOr(true);
      setOpenAdventure(false);
      setOpenChill(false);
      setOpenAdventureAndChill(false);
      setOpenAdventureOrChill(false);
    }
  };

  return (
    <>
      <header class="my-10 mx-2">
        <h1 class="text-transparent bg-gradient-to-r from-endlessRiverA to-endlessRiverB font-extrabold bg-clip-text text-xl text-center">
          Herzlichen Glückwunsch zum 30. Geburtstag, Niklas!
        </h1>
      </header>
      <main class="flex flex-col justify-center items-center gap-y-10 mx-2">
        <Button onClick={closeAll}>Würdest du eher...</Button>
        <Show when={openTransportation()} fallback={() => <></>}>
          <section class={`flex flex-col gap-y-4`}>
            <div class="flex flex-col gap-y-2">
              <Show when={chooseCar()} fallback={<></>}>
                <Button
                  onClick={() => {
                    setOpenCity(true);
                    setChooseTrain(false);
                  }}
                  url="src/styles/images/car.png"
                >
                  Mit dem Auto in den Urlaub fahren?
                </Button>
              </Show>
            </div>
            <div class="flex flex-col gap-y-2">
              <Show when={chooseTrain()} fallback={<></>}>
                <Button
                  onClick={() => {
                    setOpenCity(true), setChooseCar(false);
                  }}
                  url="src/styles/images/train.png"
                >
                  Mit der Bahn in den Urlaub fahren?
                </Button>
              </Show>
            </div>
          </section>
        </Show>
        <Show when={openCity()} fallback={() => <></>}>
          <section class={`flex flex-col gap-y-4`}>
            <div class="flex flex-col gap-y-2">
              <Show when={chooseBerlin()} fallback={<></>}>
                <Button
                  onClick={() => {
                    setOpenopenAccomodationBerlin(true);
                    setChooseBadEms(false);
                  }}
                  url="src/styles/images/berlin.png"
                >
                  nach Berlin?
                </Button>
              </Show>
            </div>
            <div class="flex flex-col gap-y-2">
              <Show when={chooseBadEms()} fallback={<></>}>
                <Button
                  onClick={() => {
                    setOpenopenAccomodationBadEms(true);
                    setChooseBerlin(false);
                  }}
                  url="src/styles/images/badems.png"
                >
                  nach Bad Ems?
                </Button>
              </Show>
            </div>
          </section>
        </Show>
        <Show when={openAccomodationBadEms()} fallback={() => <></>}>
          <section class={`flex flex-col gap-y-4`}>
            <div class="flex flex-col gap-y-2">
              <Show when={chooseHotel()} fallback={() => <></>}>
                <Button
                  onClick={() => {
                    setOpenAdventureOrChill(true);
                    setChooseAirBnB(false);
                  }}
                  url="src/styles/images/HotelBadEms.png"
                >
                  ins Hotel?
                </Button>
              </Show>
            </div>
            <div class="flex flex-col gap-y-2">
              <Show when={chooseAirBnB()} fallback={() => <></>}>
                <Button
                  onClick={() => {
                    setOpenAdventureOrChill(true);
                    setChooseHotel(false);
                  }}
                  url="src/styles/images/airBnBBadEms.png"
                >
                  ins AirBnB?
                </Button>
              </Show>
            </div>
          </section>
        </Show>
        <Show when={openAccomodationBerlin()} fallback={() => <></>}>
          <section class={`flex flex-col gap-y-4`}>
            <div class="flex flex-col gap-y-2">
              <Button
                onClick={() => setOpenAdventureOrChill(true)}
                url="src/styles/images/HotelBerlin.png"
              >
                ins Hotel?
              </Button>
            </div>
            <div class="flex flex-col gap-y-2">
              <Button
                onClick={() => setOpenAdventureOrChill(true)}
                url="src/styles/images/airBnBBerlin.png"
              >
                ins AirBnB?
              </Button>
            </div>
          </section>
        </Show>
        <Show when={openAdventureOrChill()} fallback={() => <></>}>
          <section class={`flex flex-col gap-y-4`}>
            <div class="flex flex-col gap-y-2">
              <Button
                onClick={() => {
                  setOpenAdventure(true);
                  setOpenAdventureOrChill(false);
                }}
              >
                und Spannung erleben?
              </Button>
            </div>
            <div class="flex flex-col gap-y-2">
              <Button
                onClick={() => {
                  setOpenChill(true);
                  setOpenAdventureOrChill(false);
                }}
              >
                und Entspannung erleben?
              </Button>
            </div>
            <div class="flex flex-col gap-y-2">
              <Button
                onClick={() => {
                  setOpenAdventureAndChill(true);
                  setOpenAdventureOrChill(false);
                }}
              >
                oder Spannung und Entspannung erleben?
              </Button>
            </div>
          </section>
        </Show>
        <section class={`flex flex-col items-center gap-y-4 mb-10`}>
          <Show when={openAdventure()} fallback={<></>}>
            <Show when={chooseSkydiving()} fallback={<></>}>
              <img src="src/styles/images/IndoorSkyDiving.png" alt="" />
              <Button
                onClick={() => {
                  setChooseBungee(false);
                  setShowOr(false);
                }}
              >
                Indoor Skydiving
              </Button>
            </Show>
            <Show when={showOr()} fallback={<></>}>
              <p class="text-transparent bg-gradient-to-r from-endlessRiverA to-endlessRiverB font-bold bg-clip-text text-lg text-center">
                OR
              </p>
            </Show>
            <Show when={chooseBungee()} fallback={<></>}>
              <img src="src/styles/images/BungeeJumping.png" alt="" />
              <Button
                onClick={() => {
                  setChooseSkydiving(false);
                  setShowOr(false);
                }}
              >
                Bungee Jumping
              </Button>
            </Show>
          </Show>
          <Show when={openChill()} fallback={<></>}>
            <Button url="src/styles/images/Spa.png">Spa</Button>;
          </Show>
          <Show when={openAdventureAndChill()} fallback={<></>}>
              <Show when={chooseSkydiving()} fallback={<></>}>
                <img src="src/styles/images/IndoorSkyDiving.png" alt="" />
                <Button
                  onClick={() => {
                    setChooseBungee(false);
                    setShowOr(false);
                  }}
                >
                  Indoor Skydiving
                </Button>
              </Show>
              <Show when={showOr()} fallback={<></>}>
                <p class="text-transparent bg-gradient-to-r from-endlessRiverA to-endlessRiverB font-bold bg-clip-text text-lg text-center">
                  OR
                </p>
              </Show>
              <Show when={chooseBungee()} fallback={<></>}>
                <img src="src/styles/images/BungeeJumping.png" alt="" />
                <Button
                  onClick={() => {
                    setChooseSkydiving(false);
                    setShowOr(false);
                  }}
                >
                  Bungee Jumping
                </Button>
              </Show>
            <p class="text-transparent bg-gradient-to-r from-endlessRiverA to-endlessRiverB font-bold bg-clip-text text-lg text-center">
              AND
            </p>
            <Button url="src/styles/images/Spa.png">Spa</Button>
          </Show>
        </section>
      </main>
    </>
  );
};

export default App;
