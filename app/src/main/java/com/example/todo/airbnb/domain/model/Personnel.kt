package com.example.todo.airbnb.domain.model

data class Personnel(
    val adult: Int,
    val child: Int,
    val baby: Int,
) {
    fun isDefault(): Boolean {
        return if (adult == DEFAULT_GUEST || child == DEFAULT_GUEST || baby == DEFAULT_GUEST) true
        else adult == 0 && child == 0 && baby == 0

    }

    override fun toString(): String {
        return (adult + child + baby).toString()
    }

    companion object {

        const val DEFAULT_GUEST = Int.MAX_VALUE

        fun defaultOf() = Personnel(DEFAULT_GUEST, DEFAULT_GUEST, DEFAULT_GUEST)
    }
}