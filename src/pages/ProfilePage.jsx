import React from 'react';
import { Gift, History, Send } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';

const ProfilePage = ({ user, orders, bonuses }) => {
  return (
    <div className="min-h-screen px-4 md:px-8">
      <div className="max-w-4xl mx-auto pt-12 md:pt-20 pb-24">
        <h1 className="text-4xl md:text-6xl font-light tracking-wider text-black mb-8 md:mb-12">
          Профиль
        </h1>

        {/* Профиль пользователя */}
        <GlassCard className="mb-6 animate-slide-up">
          <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center text-black text-xl md:text-2xl font-light flex-shrink-0">
              {user?.name?.[0] || 'V'}
            </div>
            <div className="min-w-0">
              <h2 className="text-black text-xl md:text-2xl font-light mb-1 truncate">
                @{user?.username || 'values_user'}
              </h2>
              <a 
                href="https://t.me/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 text-xs md:text-sm hover:text-black transition-colors flex items-center gap-2"
              >
                <Send className="w-3 h-3 md:w-4 md:h-4" />
                Подключить Telegram
              </a>
            </div>
          </div>

          {/* Бонусы */}
          <div className="flex items-center justify-between p-3 md:p-4 bg-gray-50 rounded-xl mb-4">
            <div className="flex items-center gap-2 md:gap-3">
              <Gift className="w-5 h-5 md:w-6 md:h-6 text-black" />
              <span className="text-black text-sm md:text-base">Ваши бонусы</span>
            </div>
            <span className="text-xl md:text-2xl font-light text-black">
              {bonuses || 0}
            </span>
          </div>

          {/* Реферальная ссылка */}
          <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
            <p className="text-gray-600 text-xs md:text-sm mb-2">Реферальная программа</p>
            <p className="text-black text-sm md:text-lg mb-3">
              Приглашайте друзей и получайте <span className="font-semibold">100 бонусов</span> за каждого!
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={`https://values.store/ref/${user?.id || '12345'}`}
                readOnly
                className="flex-1 bg-white border border-gray-200 rounded-lg px-3 md:px-4 py-2 text-black text-xs md:text-sm"
              />
              <button className="bg-black text-white px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-gray-800 transition-all whitespace-nowrap">
                Копировать
              </button>
            </div>
          </div>
        </GlassCard>

        {/* История заказов */}
        <GlassCard className="animate-slide-up">
          <div className="flex items-center gap-3 mb-6">
            <History className="w-5 h-5 md:w-6 md:h-6 text-black" />
            <h2 className="text-black text-lg md:text-xl font-light">История заказов</h2>
          </div>

          {orders && orders.length > 0 ? (
            <div className="space-y-3">
              {orders.map((order) => (
                <div 
                  key={order.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <p className="text-black font-medium mb-1 text-sm md:text-base">
                      Заказ #{order.id}
                    </p>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {order.date} • {order.items} товаров
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-black text-sm md:text-base">
                      {(order.total / 100).toLocaleString('ru-RU')} ₽
                    </p>
                    <p className={`text-xs md:text-sm ${
                      order.status === 'delivered' ? 'text-green-600' :
                      order.status === 'processing' ? 'text-yellow-600' :
                      'text-blue-600'
                    }`}>
                      {order.status === 'delivered' ? 'Доставлен' :
                       order.status === 'processing' ? 'В обработке' : 'Отправлен'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center py-8 text-sm md:text-base">
              Пока нет заказов
            </p>
          )}
        </GlassCard>
      </div>
    </div>
  );
};

export default ProfilePage;