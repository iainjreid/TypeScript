/// <reference lib="es2009.string" />

interface String {
    /**
     * Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
     * value of the UTF-16 encoded code point starting at the string element at position pos in
     * the String resulting from converting this object to a String.
     * If there is no element at that position, the result is undefined.
     * If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.
     */
    codePointAt(pos: number): number | undefined;

    /**
     * Returns true if searchString appears as a substring of the result of converting this
     * object to a String, at one or more positions that are
     * greater than or equal to position; otherwise, returns false.
     * @param searchString search string
     * @param position If position is undefined, 0 is assumed, so as to search all of the String.
     */
    includes(searchString: string, position?: number): boolean;

    /**
     * Returns true if the sequence of elements of searchString converted to a String is the
     * same as the corresponding elements of this object (converted to a String) starting at
     * endPosition – length(this). Otherwise returns false.
     */
    endsWith(searchString: string, endPosition?: number): boolean;

    /**
     * Returns the String value result of normalizing the string into the normalization form
     * named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
     * @param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
     * is "NFC"
     */
    normalize(form: "NFC" | "NFD" | "NFKC" | "NFKD"): string;

    /**
     * Returns the String value result of normalizing the string into the normalization form
     * named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
     * @param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
     * is "NFC"
     */
    normalize(form?: string): string;

    /**
     * Returns a String value that is made from count copies appended together. If count is 0,
     * the empty string is returned.
     * @param count number of copies to append
     */
    repeat(count: number): string;

    /**
     * Returns true if the sequence of elements of searchString converted to a String is the
     * same as the corresponding elements of this object (converted to a String) starting at
     * position. Otherwise returns false.
     */
    startsWith(searchString: string, position?: number): boolean;

    /**
     * Returns an `<a>` HTML anchor element and sets the name attribute to the text value
     * @deprecated A legacy feature for browser compatibility
     * @param name
     */
    anchor(name: string): string;

    /**
     * Returns a `<big>` HTML element
     * @deprecated A legacy feature for browser compatibility
     */
    big(): string;

    /**
     * Returns a `<blink>` HTML element
     * @deprecated A legacy feature for browser compatibility
     */
    blink(): string;

    /**
     * Returns a `<b>` HTML element
     * @deprecated A legacy feature for browser compatibility
     */
    bold(): string;

    /**
     * Returns a `<tt>` HTML element
     * @deprecated A legacy feature for browser compatibility
     */
    fixed(): string;

    /**
     * Returns a `<font>` HTML element and sets the color attribute value
     * @deprecated A legacy feature for browser compatibility
     */
    fontcolor(color: string): string;

    /**
     * Returns a `<font>` HTML element and sets the size attribute value
     * @deprecated A legacy feature for browser compatibility
     */
    fontsize(size: number): string;

    /**
     * Returns a `<font>` HTML element and sets the size attribute value
     * @deprecated A legacy feature for browser compatibility
     */
    fontsize(size: string): string;

    /**
     * Returns an `<i>` HTML element
     * @deprecated A legacy feature for browser compatibility
     */
    italics(): string;

    /**
     * Returns an `<a>` HTML element and sets the href attribute value
     * @deprecated A legacy feature for browser compatibility
     */
    link(url: string): string;

    /**
     * Returns a `<small>` HTML element
     * @deprecated A legacy feature for browser compatibility
     */
    small(): string;

    /**
     * Returns a `<strike>` HTML element
     * @deprecated A legacy feature for browser compatibility
     */
    strike(): string;

    /**
     * Returns a `<sub>` HTML element
     * @deprecated A legacy feature for browser compatibility
     */
    sub(): string;

    /**
     * Returns a `<sup>` HTML element
     * @deprecated A legacy feature for browser compatibility
     */
    sup(): string;
}

interface StringConstructor {
    /**
     * Return the String value whose elements are, in order, the elements in the List elements.
     * If length is 0, the empty string is returned.
     */
    fromCodePoint(...codePoints: number[]): string;

    /**
     * String.raw is usually used as a tag function of a Tagged Template String. When called as
     * such, the first argument will be a well formed template call site object and the rest
     * parameter will contain the substitution values. It can also be called directly, for example,
     * to interleave strings and values from your own tag function, and in this case the only thing
     * it needs from the first argument is the raw property.
     * @param template A well-formed template string call site representation.
     * @param substitutions A set of substitution values.
     */
    raw(template: { raw: readonly string[] | ArrayLike<string>}, ...substitutions: any[]): string;
}
