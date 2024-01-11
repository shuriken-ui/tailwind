import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { SlimscrollAttrs } from './slimscroll.types'
import * as variants from './slimscroll.variants'

/**
 * Primary UI component for user interaction
 */
export const Slimscroll = ({ ...attrs }: SlimscrollAttrs) => {
  return html`
    <div class="flex items-center justify-center px-4 pt-4 pb-0">
      <div class="w-full bg-muted-100 dark:bg-muted-900 rounded-xl p-4 md:p-8">
        <div class="max-w-full">
          <div
            class="p-6 bg-white dark:bg-muted-800 border border-muted-200 dark:border-muted-400 rounded-lg"
          >
            <div class="space-y-4 pe-4 h-64 overflow-y-auto nui-slimscroll">
              <p class="nui-text nui-text-sm text-muted-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Universa enim illorum ratione cum tota vestra confligendum puto.
                Fortemne possumus dicere eundem illum Torquatum? Bonum patria:
                miserum exilium. Duo Reges: constructio interrete. Vide, quaeso,
                rectumne sit. Cur tantas regiones barbarorum pedibus obiit, tot
                maria transmisit? Nunc de hominis summo bono quaeritur; Ut
                optime, secundum naturam affectum esse possit.
              </p>
              <p class="nui-text nui-text-sm text-muted-400">
                Est, ut dicis, inquit; Ergo ita: non posse honeste vivi, nisi
                honeste vivatur? Nec mihi illud dixeris: Haec enim ipsa mihi
                sunt voluptati, et erant illa Torquatis. Quod eo liquidius
                faciet, si perspexerit rerum inter eas verborumne sit
                controversia. Scaevolam M. Sic exclusis sententiis reliquorum
                cum praeterea nulla esse possit, haec antiquorum valeat necesse
                est. Quodsi ipsam honestatem undique pertectam atque absolutam.
                Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant.
                Nam de isto magna dissensio est.
              </p>
              <p class="nui-text nui-text-sm text-muted-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Universa enim illorum ratione cum tota vestra confligendum puto.
                Fortemne possumus dicere eundem illum Torquatum? Bonum patria:
                miserum exilium. Duo Reges: constructio interrete. Vide, quaeso,
                rectumne sit. Cur tantas regiones barbarorum pedibus obiit, tot
                maria transmisit? Nunc de hominis summo bono quaeritur; Ut
                optime, secundum naturam affectum esse possit. Est, ut dicis,
                inquit; Ergo ita: non posse honeste vivi, nisi honeste vivatur?
                Nec mihi illud dixeris: Haec enim ipsa mihi sunt voluptati, et
                erant illa Torquatis. Quod eo liquidius faciet, si perspexerit
                rerum inter eas verborumne sit controversia. Scaevolam M. Sic
                exclusis sententiis reliquorum cum praeterea nulla esse possit,
                haec antiquorum valeat necesse est. Quodsi ipsam honestatem
                undique pertectam atque absolutam. Hoc etsi multimodis
                reprehendi potest, tamen accipio, quod dant. Nam de isto magna
                dissensio est.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}
