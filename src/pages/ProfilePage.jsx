import React from 'react';
import { Gift, History, Send } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';

const ProfilePage = ({ user, orders, bonuses }) => {
  return (
    <div className="min-h-screen px-8">
      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-6xl font-light tracking-wider text-white mb-12">
          Profile
        </h1>

        {/* Профиль пользователя */}
        <GlassCard className="mb-6 animate-slide-up">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center text-white text-2xl font-light">
              {user?.name?.[0] || 'V'}
            </div>
            <div>
              <h2 className="text-white text-2xl font-light mb-1">
                @{user?.username || 'values_user'}
              </h2>
              <a 
                href="https://t.me/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Connect Telegram
              </a>
            </div>
          </div>

          {/* Бонусы */}
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl mb-4">
            <div className="flex items-center gap-3">
              <Gift className="w-6 h-6 text-white" />
              <span className="text-white">Your Bonuses</span>
            </div>
            <span className="text-2xl font-light text-white">
              {bonuses || 0}
            </span>
          </div>

          {/* Реферальная ссылка */}
          <div className="p-4 bg-gradient-to-r from-white/5 to-white/10 rounded-xl">
            <p className="text-white/60 text-sm mb-2">Referral Program</p>
            <p className="text-white text-lg mb-3">
              Invite friends and get <span className="font-semibold">100 bonuses</span> for each!
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                value={`https://values.store/ref/${user?.id || '12345'}`}
                readOnly
                className="flex-1 bg-black/30 border border-white/20 rounded-lg px-4 py-2 text-white text-sm"
              />
              <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-white/90 transition-all">
                Copy
              </button>
            </div>
          </div>
        </GlassCard>

        {/* История заказов */}
        <GlassCard className="animate-slide-up">
          <div className="flex items-center gap-3 mb-6">
            <History className="w-6 h-6 text-white" />
            <h2 className="text-white text-xl font-light">Order History</h2>
          </div>

          {orders && orders.length > 0 ? (
            <div className="space-y-3">
              {orders.map((order) => (
                <div 
                  key={order.id}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div>
                    <p className="text-white font-medium mb-1">
                      Order #{order.id}
                    </p>
                    <p className="text-white/60 text-sm">
                      {order.date} • {order.items} items
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-white">
                      {(order.total / 100).toLocaleString('ru-RU')} ₽
                    </p>
                    <p className={`text-sm ${
                      order.status === 'delivered' ? 'text-green-400' :
                      order.status === 'processing' ? 'text-yellow-400' :
                      'text-blue-400'
                    }`}>
                      {order.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-white/40 text-center py-8">
              No orders yet
            </p>
          )}
        </GlassCard>
      </div>
    </div>
  );
};

export default ProfilePage;