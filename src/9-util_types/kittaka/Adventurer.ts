export type Adventurer<S, A> = {
  status: S,
  actions?: A & ThisType<S & A>, // S と A を混ぜたもののポインタを返して, そのポインタと A を混ぜる

}

export function makeAdventurer<S, A>(adventurer: Adventurer<S, A>): S & A {
  let status: object = adventurer.status || {};
  let actions: object = adventurer.actions || {};
  return { ...status, ...actions } as S & A;
}
