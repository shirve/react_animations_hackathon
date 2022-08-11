import { Animator } from 'shared'

import { Dots } from './Dots'

const configFn = (index) => ({
  to: [{ left: 2 }, { left: 0 }, { left: -1 }, { left: 0 }],
  from: { left: 0 },
  delay: index * 16 * 6,
  config: { duration: 400, precision: 0.0001 },
})

export const Main = () => (
  <div className="relative py-16 bg-white overflow-hidden">
    <Dots />

    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="text-lg max-w-prose mx-auto">
        <h1>
          <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
            Welcome in
          </span>
          <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <Animator
              text="React Animations hackathon app"
              animationConfigFn={configFn}
              className="relative"
            />
          </span>
        </h1>
        <p className="mt-8 text-xl text-gray-500 leading-8">
          The hackathon is two-part event and will happen at 12th&nbsp;August
          and 16th&nbsp;September 2022 in{' '}
          <a href="https://selleo.com/">Selleo HQ</a> and remotely.
        </p>
        <p className="mt-8 text-xl text-gray-500 leading-8">
          Every team has separate route and folder to show their creations.
          Below you can check links to important pages.
        </p>
      </div>

      <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
        <ul>
          <li>
            Repository with the code:{' '}
            <a href="https://github.com/Selleo/react_animations_hackathon/">
              github react_animations_hackathon
            </a>
          </li>
          <li>
            Doc with the challenges description:{' '}
            <a href="https://docs.google.com/document/d/14Htew_YzCVcP5lT1-s6sgbaAwsGik1jPs_rkA0RtzY8/edit#/">
              Google docs
            </a>
          </li>
          <li>
            Sheet with the teams:{' '}
            <a href="https://docs.google.com/spreadsheets/d/1wKo5fcuxizddfrIq8AoTrRJD_oiPFTWAhWn32k14NXI/edit#gid=0">
              Google sheets
            </a>
          </li>
        </ul>

        <h2>Main features</h2>

        <h4>Page loading and partial UI loading</h4>
        <p>Both cases can use the same animation. Can be interactive.</p>

        <h4>Text field</h4>
        <p>All interactions with text field:</p>
        <ul>
          <li>hover</li>
          <li>placeholder</li>
          <li>label</li>
          <li>error message</li>
        </ul>

        <h4>List element</h4>
        <p>By default display short text. After interaction (click/hover):</p>
        <ul>
          <li>display more info about given element</li>
          <li>animate removing element from the list</li>
          <li>animate element deletion from the list</li>
        </ul>

        <h2>Optional features</h2>

        <h4>Button</h4>
        <p>Animate interaction with the button (click/hover)</p>

        <h4>Navigation</h4>
        <p>Animate switching paths in the application.</p>

        <h4>Other input fields</h4>
        <p>
          Additionally animate other input fields (select, checkbox) as done
          with text field
        </p>
      </div>
    </div>
  </div>
)
