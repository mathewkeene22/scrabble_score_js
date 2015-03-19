describe('scrabble_score', function() {
  it('will assign 1 value point for a, e, i, o, u, l, n, r, s, t', function() {
    expect(scrabble_score("eat")).to.equal(3);
  });

  it('will assign 2 value points for d and g', function() {
    expect(scrabble_score("dog")).to.equal(5);
  });

  it('will assign 3 points of value for b, c, m, p', function() {
    expect(scrabble_score("boop")).to.equal(8);
  });

  it('will assign 4 points of value for f, h, v, w, y', function () {
    expect(scrabble_score("wiseguy")).to.equal(14);
  });

  it('will assign 5 points of value for the letter k', function() {
    expect(scrabble_score("kite")).to.equal(8);
  });

  it('will assign 8 points of value for the letters j and x', function() {
    expect(scrabble_score("ajax")).to.equal(18);
  });

  it('will assign 10 points of value for the letters q and z', function() {
    expect(scrabble_score("pizza")).to.equal(25);
  });
});
