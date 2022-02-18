export const EXAMPLES = {
  ACTOR_PRELUDE_SAMPLE: 'actor_prelude_sample.xml',
  ACTOR_PRELUDE_SAMPLE_PART_NAME: 'actor_prelude_sample_part_name.xml',
  APRES_UN_REVE: 'apres_un_reve.xml',
  BEETHOVEN_AN_DIE_FERNE_GELIEBTE: 'beethoven_an_die_ferne_geliebte.xml',
  BRAHMS_VIOLIN_CONCERTO: 'brahms_violin_concerto.xml',
  CHARLES_GOUNOD_MEDITATION: 'charles_gounod_meditation.xml',
  CHOPIN_PRELUDE: 'chopin_prelude.xml',
  CONCERT_SCORE_AND_FOR_PART: 'concert_score_and_for_part.xml',
  DEBUSSY_MANDOLINE: 'debussy_mandoline.xml',
  DICHTERLIEBE: 'dichterliebe.xml',
  EXPRESSION_TEST: 'expression_test.xml',
  HELLO_WORLD_MODIFIED: 'hello_world_modified.xml',
  HELLO_WORLD: 'hello_world.xml',
  JOHANN_SEBASTIAN_BACH_AIR: 'johann_sebastian_bach_air.xml',
  MOSTLY_INVALID: 'mostly_invalid.xml',
  NOTE_VARIATIONS: 'note_variations.xml',
  PARTIALLY_INVALID: 'partially_invalid.xml',
  SIMPLE_TABLATURE: 'simple_tablature.xml',
  TUTORIAL_PERCUSSION: 'tutorial_percussion.xml',
  TUTOTRIAL_CHORD_SYMBOLS: 'tutorial_chord_symbols.xml',
  WANNA_SKIP_CLASS: 'wanna_skip_class.xml',
  INVALID_ROOT: 'invalid_root.xml',
  JOHANN_SEBASTIAN_BACH_PRELUDE_IN_C: 'johann_sebastian_bach_prelude_in_c.xml',
  JOSEPH_HAYDN_CONCERTANTE_CELLO: 'joseph_haydn_concertante_cello.xml',
  LAND_DER_BERGE: 'land_der_berge.xml',
  MOZART_AN_CHLOE: 'mozart_an_chloe.xml',
  MOZART_DAS_VEILCHEN: 'mozart_das_veilchen.xml',
  MOZART_STRING_QUARTET: 'mozart_string_quartet.xml',
  CONTAINER_HEIGHT: 'container_height.xml',
  DRUMS_ONE_LINE_SNARE_PLUS_PIANO: 'drums_one_line_snare_plus_piano.xml',
  LABELS: 'labels.xml',
  TABLATURE_ALL_EFFECTS: 'tablature_all_effects.xml',
  TABLATURE_BENDS: 'tablature_bends.xml',
  TABLATURE_HAMMER_ON_PULL_OFF: 'tablature_hammer_on_pull_off.xml',
  TABLTURE_MULTIBENDS: 'tablature_multibends.xml',
  TABLATURE_SLIDES: 'tablature_slides.xml',
  TABLATURE_VIBRATO: 'tablature_vibrato.xml',
  TREMELO_TWO_BARS: 'tremelo_two_bars.xml',
  VOICE_ALIGNMENT: 'voice_alignment.xml',
  REPEAT: 'repeat.xml',
  GRACE_NOTES: 'grace_notes.xml',
  ORNAMENTS: 'ornaments.xml',
  ACCIDENTALS: 'accidentals.xml',
  VARIETY: 'variety.xml',
  AUTO_CUSTOM_COLORING_ENTCHEN: 'auto_custom_coloring_entchen.xml',
  AUTOBEAM: 'autobeam.xml',
  BAR_LINES: 'bar_lines.xml',
  CHORD_SYMBOLS: 'chord_symbols.xml',
} as const;

export const EXAMPLE_SUITES = {
  GUITAR_PRO: [EXAMPLES.WANNA_SKIP_CLASS],
  OSMD: [
    EXAMPLES.ACTOR_PRELUDE_SAMPLE,
    EXAMPLES.ACTOR_PRELUDE_SAMPLE_PART_NAME,
    EXAMPLES.BEETHOVEN_AN_DIE_FERNE_GELIEBTE,
    EXAMPLES.BRAHMS_VIOLIN_CONCERTO,
    EXAMPLES.CHARLES_GOUNOD_MEDITATION,
    EXAMPLES.DEBUSSY_MANDOLINE,
    EXAMPLES.DICHTERLIEBE,
    EXAMPLES.EXPRESSION_TEST,
    EXAMPLES.HELLO_WORLD,
    EXAMPLES.JOHANN_SEBASTIAN_BACH_AIR,
    EXAMPLES.JOHANN_SEBASTIAN_BACH_PRELUDE_IN_C,
    EXAMPLES.JOSEPH_HAYDN_CONCERTANTE_CELLO,
    EXAMPLES.LAND_DER_BERGE,
    EXAMPLES.MOZART_AN_CHLOE,
    EXAMPLES.MOZART_DAS_VEILCHEN,
    EXAMPLES.MOZART_STRING_QUARTET,
    EXAMPLES.CONTAINER_HEIGHT,
    EXAMPLES.DRUMS_ONE_LINE_SNARE_PLUS_PIANO,
    EXAMPLES.LABELS,
    EXAMPLES.TABLATURE_ALL_EFFECTS,
    EXAMPLES.TABLATURE_BENDS,
    EXAMPLES.TABLATURE_HAMMER_ON_PULL_OFF,
    EXAMPLES.TABLTURE_MULTIBENDS,
    EXAMPLES.TABLATURE_SLIDES,
    EXAMPLES.TABLATURE_VIBRATO,
    EXAMPLES.TREMELO_TWO_BARS,
    EXAMPLES.VOICE_ALIGNMENT,
    EXAMPLES.REPEAT,
    EXAMPLES.GRACE_NOTES,
    EXAMPLES.ORNAMENTS,
    EXAMPLES.ACCIDENTALS,
    EXAMPLES.VARIETY,
    EXAMPLES.AUTO_CUSTOM_COLORING_ENTCHEN,
    EXAMPLES.AUTOBEAM,
    EXAMPLES.BAR_LINES,
    EXAMPLES.CHORD_SYMBOLS,
  ],
  W3: [
    EXAMPLES.APRES_UN_REVE,
    EXAMPLES.CONCERT_SCORE_AND_FOR_PART,
    EXAMPLES.HELLO_WORLD,
    EXAMPLES.HELLO_WORLD_MODIFIED,
    EXAMPLES.NOTE_VARIATIONS,
    EXAMPLES.SIMPLE_TABLATURE,
    EXAMPLES.TUTORIAL_PERCUSSION,
    EXAMPLES.TUTOTRIAL_CHORD_SYMBOLS,
  ],
} as const;
